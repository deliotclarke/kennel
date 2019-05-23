const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }).then(e => e.json())
  },
  addEmployee(employeeObj) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(employeeObj)
    }).then(e => e.json())
  }
}