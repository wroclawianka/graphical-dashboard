import ApiService from "./services/apiService.js";
import Revenue from "./models/revenue.js";
import Impresions from "./models/impresions.js";
import Visits from "./models/visits.js";

let revenue = null;
let impresions = null;
let visits = null;

const apiUrl = "http://localhost:3001";
const apiService = new ApiService(apiUrl);
apiService
  .fetchRevenue()
  .then(data => (revenue = new Revenue(data.tablet, data.smartphone)))
  .then(revenue => console.log(revenue));

apiService
  .fetchImpresions()
  .then(data => (impresions = new Impresions(data.tablet, data.smartphone)))
  .then(impresions => console.log(impresions));

apiService
  .fetchVisits()
  .then(data => (visits = new Visits(data.tablet, data.smartphone)))
  .then(visits => console.log(visits));
