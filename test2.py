import sqlite3
# Connect to the database
conn = sqlite3.connect('mydatabase.db')
cursor = conn.cursor()

# Execute a SQL query
cursor.execute('SELECT * FROM posts')

# Fetch the results
results = cursor.fetchall()

# Print the results
for row in results:
    print(row)

# Close the connection
conn.close()