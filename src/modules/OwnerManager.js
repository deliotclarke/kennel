const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE",
      header: {
        'content-type': "application/json"
      }
    }).then(e => e.json())
  },
  addOwner(ownerObj) {
    return fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(ownerObj)
    }).then(e => e.json())
  }
}