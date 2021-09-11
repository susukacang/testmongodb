window.addEventListener('DOMContentLoaded', () => {
  const item = document.querySelector('form input')
  const todo = { item: item.value }

  const http = new XMLHttpRequest()
  http.open('POST', '/todo')
  http.setRequestHeader('Content-type', 'application/json')
  http.send(JSON.stringify(todo))
  http.onload = function() {
    alert(http.res)
  }

})