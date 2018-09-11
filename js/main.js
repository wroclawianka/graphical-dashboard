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

let revenuePie = new Pie("green-pie");
let impresionsPie = null;
let visitsPie = null;

apiService
  .fetchRevenue()
  .then(data => (revenue = new Revenue(data.smartphone, data.tablet)))
  .then(revenue => revenuePie.createSVG(revenue));

apiService
  .fetchImpresions()
  .then(data => (impresions = new Impresions(data.smartphone, data.tablet)));

apiService
  .fetchVisits()
  .then(data => (visits = new Visits(data.smartphone, data.tablet)));
