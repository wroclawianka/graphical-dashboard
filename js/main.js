import ApiService from "./services/apiService.js";
import Revenue from "./models/revenue.js";
import Impresions from "./models/impresions.js";
import Visits from "./models/visits.js";
import Pie from './views/pie.js';

const apiUrl = "http://localhost:3001";
const apiService = new ApiService(apiUrl);

let revenue = null;
let impresions = null;
let visits = null;

let revenuePie = new Pie("revenue", "green-pie");
let impresionsPie = new Pie("impresions", "blue-pie");
let visitsPie = new Pie("visits", "orange-pie");

apiService
  .fetchRevenue()
  .then(data => (revenue = new Revenue(data.smartphone, data.tablet)))
  .then(revenue => revenuePie.createSVG(revenue));

apiService
  .fetchImpresions()
  .then(data => (impresions = new Impresions(data.smartphone, data.tablet)))
  .then(impresions => impresionsPie.createSVG(impresions));

apiService
  .fetchVisits()
  .then(data => (visits = new Visits(data.smartphone, data.tablet)))
  .then(visits => visitsPie.createSVG(visits));
