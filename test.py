from newsapi import NewsApiClient
import sqlite3

# Init
newsapi = NewsApiClient(api_key='3ea6b19a4931434ab51af2b64a62b5a8')
data = newsapi.get_everything('gambling addiction' or "gambling dependency")
conn = sqlite3.connect("mydatabase.db")
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS articles (
        title TEXT,
        url TEXT,
        desc TEXT,
        publishedAt TEXT
    )
''')

for n in range(50):
    title = data["articles"][n]["title"]
    url = data["articles"][n]["url"]
    desc = data["articles"][n]["description"]
    publishedAt = data["articles"][n]["publishedAt"]

    # Insert the data as a single row
    cursor.execute('INSERT INTO articles VALUES (?, ?, ?, ?)', (title, url, desc, publishedAt))


conn.commit()
conn.close()
