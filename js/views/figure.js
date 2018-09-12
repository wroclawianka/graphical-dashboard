import { appendDevicesDetails } from "./devices.js"
import PieChart from "./pieChart.js"

export default class Figure {
  constructor(data, isCurrency) {
    this.data = data;
    this.isCurrency = isCurrency;
  }

  createFigure(name, type) {
    const pie = new PieChart(160, 160, 7);
    pie.appendSVG(name, type, this.data);
    appendDevicesDetails(name, this.data, this.isCurrency)
  }
}
