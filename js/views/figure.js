import DevicesDetails from "./devicesDetails.js"
import PieChart from "./pieChart.js"

export default class Figure {
  constructor(name, type, data, isCurrency) {
    this.name = name;
    this.type = type;
    this.data = data;
    this.isCurrency = isCurrency;
  }

  createFigure() {
    this.createPie();
    this.createDevicesDetails();
  }

  createPie(){
    const pie = new PieChart(160, 160, 7);
    pie.appendSVG(this.name, this.type, this.data);
  }

  createDevicesDetails(){
    const devicesDetails = new DevicesDetails();
    devicesDetails.appendDevicesDetails(this.name, this.data, this.isCurrency)
  }
}
