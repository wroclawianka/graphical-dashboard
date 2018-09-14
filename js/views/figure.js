import DevicesDetails from "./devicesDetails.js"
import PieChart from "./pieChart.js"
import Summary from "./summary.js"
import { sumValues, formatValue } from "./helpers.js"

export default class Figure {
  constructor(name, type, data, isMonetaryValue) {
    this.name = name;
    this.type = type;
    this.data = data;
    this.isMonetaryValue = isMonetaryValue;
  }

  createFigure() {
    this.createPie();
    this.createDevicesDetails();
    this.createSummary();
  }

  createPie(){
    const pie = new PieChart(this.name, this.type, this.data);
    pie.appendPie();
  }

  createDevicesDetails(){
    const devicesDetails = new DevicesDetails();
    devicesDetails.appendDevicesDetails(this.name, this.data, this.isMonetaryValue)
  }

  createSummary(){
    const name = this.name;

    const values = Object.values(this.data);
    const totalValue = sumValues(values);
    const total = formatValue(totalValue, this.isMonetaryValue);

    const summary = new Summary(name, total);

    summary.appendSummary();
  }
}
