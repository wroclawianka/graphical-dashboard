// import ApiService from "./services/apiService.js";
import Revenue from "./models/revenue.js";
import Impresions from "./models/impresions.js";
import Visits from "./models/visits.js";
import Figure from './views/figure.js';

// const apiUrl = "http://localhost:3001";
// const apiService = new ApiService(apiUrl);

let [revenue, impresions, visits] = [
  new Revenue(80000, 120000), new Impresions(30000000, 20000000), new Visits(120000000, 480000000)];
let [revenueFigure, impresionsFigure, visitsFigure] = [
  new Figure("revenue", "green-pie", revenue, true),
  new Figure("impresions", "blue-pie", impresions),
  new Figure("visits", "orange-pie", visits)
];

  revenueFigure.createFigure();
  impresionsFigure.createFigure();
  visitsFigure.createFigure();

// apiService
//   .fetchRevenue()
//   .then(data => (revenue = new Revenue(data.smartphone, data.tablet)))
//   .then(revenue => revenueFigure = new Figure("revenue", "green-pie", revenue, true))
//   .then(revenue => revenueFigure.createFigure());

// apiService
//   .fetchImpresions()
//   .then(data => (impresions = new Impresions(data.smartphone, data.tablet)))
//   .then(impresions => impresionsFigure = new Figure("impresions", "blue-pie", impresions))
//   .then(impresions => impresionsFigure.createFigure());

// apiService
//   .fetchVisits()
//   .then(data => (visits = new Visits(data.smartphone, data.tablet)))
//   .then(visits => visitsFigure = new Figure("visits", "orange-pie", visits))
//   .then(visits => visitsFigure.createFigure());
