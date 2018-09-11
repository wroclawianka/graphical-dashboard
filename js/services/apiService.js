export default class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  fetchData(data) {
    const url = this.apiUrl + `/${data}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    return fetch(url, options)
      .then(response => response.json())
      .catch(err => err);
  }

  fetchRevenue() {
    return this.fetchData("revenue");
  }

  fetchImpresions() {
    return this.fetchData("impresions");
  }

  fetchVisits() {
    return this.fetchData("visits");
  }
}
