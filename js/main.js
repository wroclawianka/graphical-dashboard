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

let revenuePie = null;
let impresionsPie = null;
let visitsPie = null;

apiService
  .fetchRevenue()
  .then(data => (revenue = new Revenue(data.smartphone, data.tablet)))
  .then(revenue => revenuePie = new Pie("revenue", "green-pie", revenue))
  .then(revenue => revenuePie.createDiagram());

apiService
  .fetchImpresions()
  .then(data => (impresions = new Impresions(data.smartphone, data.tablet)))
  .then(impresions => impresionsPie = new Pie("impresions", "blue-pie", impresions))
  .then(impresions => impresionsPie.createDiagram());

apiService
  .fetchVisits()
  .then(data => (visits = new Visits(data.smartphone, data.tablet)))
  .then(visits => visitsPie = new Pie("visits", "orange-pie", visits))
  .then(visits => visitsPie.createDiagram());
