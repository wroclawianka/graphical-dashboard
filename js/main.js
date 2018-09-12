import ApiService from "./services/apiService.js";
import Revenue from "./models/revenue.js";
import Impresions from "./models/impresions.js";
import Visits from "./models/visits.js";
import Figure from './views/figure.js';

const apiUrl = "http://localhost:3001";
const apiService = new ApiService(apiUrl);

let revenue = null;
let impresions = null;
let visits = null;

let revenueFigure = null;
let impresionsFigure = null;
let visitsFigure = null;

apiService
  .fetchRevenue()
  .then(data => (revenue = new Revenue(data.smartphone, data.tablet)))
  .then(revenue => revenueFigure = new Figure("revenue", "green-pie", revenue, true))
  .then(revenue => revenueFigure.createDiagram());

apiService
  .fetchImpresions()
  .then(data => (impresions = new Impresions(data.smartphone, data.tablet)))
  .then(impresions => impresionsFigure = new Figure("impresions", "blue-pie", impresions))
  .then(impresions => impresionsFigure.createDiagram());

apiService
  .fetchVisits()
  .then(data => (visits = new Visits(data.smartphone, data.tablet)))
  .then(visits => visitsFigure = new Figure("visits", "orange-pie", visits))
  .then(visits => visitsFigure.createDiagram());
