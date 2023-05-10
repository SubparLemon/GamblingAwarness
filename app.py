from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import time
import math
from datetime import datetime, timedelta

app = Flask(__name__)

conn = sqlite3.connect('mydatabase.db')
conn.execute('CREATE TABLE IF NOT EXISTS posts ('
             ' id INTEGER PRIMARY KEY AUTOINCREMENT,'
             ' title TEXT NOT NULL,'
             ' content TEXT NOT NULL,'
             ' createdAt INTEGER NOT NULL,'
             ' timeElapsed INTEGER NOT NULL DEFAULT 0,'
             ' score INTEGER NOT NULL DEFAULT 0)')
conn.commit()
conn.close()

request_count = {}
MAX_REQUESTS_PER_MINUTE = 1


def power(base, exponent):
    return math.pow(base, exponent)

@app.route('/')
def index():
    conn = sqlite3.connect('mydatabase.db')
    conn.create_function('power', 2, power)
    cursor = conn.cursor()

    cursor.execute("UPDATE posts SET timeElapsed = CAST(((createdAt - ?)/3600) as INTEGER)", (int(time.time()),))

    data = cursor.execute("SELECT title, url, SUBSTR(publishedAt, 1, 10), desc FROM articles LIMIT 20").fetchall()

    topPosts = cursor.execute("SELECT * FROM posts ORDER BY (power(score, 1.5) / (1 + .2 * power(timeElapsed, 1.3))) DESC LIMIT 5").fetchall()

    conn.close()

    return render_template('index.html', data=data, posts=topPosts)

@app.route('/add', methods=['GET', 'POST'])
def add_post():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        conn = sqlite3.connect('mydatabase.db')
        conn.execute('INSERT INTO posts (title, content, createdAt) VALUES (?, ?, ?)', (title, content, int(time.time())))
        conn.commit()
        return redirect(url_for('forum'))
    return render_template('add.html')

@app.route('/articles')
def articles():
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()

    # Select the data from the database
    cursor.execute("SELECT title, url, SUBSTR(publishedAt, 1, 10), desc FROM articles")

    # Fetch the results and store them in a variable
    data = cursor.fetchall()

    # Close the connection
    conn.close()

    return render_template('articles.html', data=data)

@app.route('/forum')
def forum():
    conn = sqlite3.connect('mydatabase.db')
    conn.create_function('power', 2, power)
    cursor = conn.cursor()
    posts = cursor.execute("SELECT * FROM posts ORDER BY (score / (1 + .2 * power(timeElapsed, 1.3))) DESC").fetchall()
    return render_template('forum.html', posts=posts)

@app.route('/update_score', methods=['POST'])
def update_score():
    ip_address = request.remote_addr

    # Get the current time
    now = datetime.now()

    # Check if the IP address has exceeded the maximum number of requests allowed
    if ip_address in request_count and request_count[ip_address]['time'] > now - timedelta(minutes=1):
        if request_count[ip_address]['count'] >= MAX_REQUESTS_PER_MINUTE:
            return 'Too many requests', 429

    # Increment the request count for the IP address
    if ip_address in request_count and request_count[ip_address]['time'] > now - timedelta(minutes=1):
        request_count[ip_address]['count'] += 1
    else:
        request_count[ip_address] = {'count': 1, 'time': now}
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()
    data = request.get_json()
    post_id = data['post_id']
    score = data['score']
    cursor.execute('UPDATE posts SET score = (score + ?) WHERE id = ?', (score, post_id))
    conn.commit()
    conn.close()
    return 'OK'

if __name__ == '__main__':
    app.run()
