function updateScore(id) {
    fetch('/update_score', {
      method: 'POST',
      body: JSON.stringify({post_id: id, score: 1}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
}
