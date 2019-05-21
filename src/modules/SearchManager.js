const remoteURL = "http://localhost:5002"

export default {
  getResults(input) {
    return fetch(`${remoteURL}/?_like=${input}`).then(e => e.json())
  }
}