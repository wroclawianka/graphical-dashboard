import DevicesDetails from "./devicesDetails.js"
import PieChart from "./pieChart.js"
import Summary from "./summary.js"
import { countPercentage, sumValues, formatValue } from "./../helpers/calculationHelpers.js"

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
    const total = sumValues(this.data);
    const devices = Object.keys(this.data);
    let devicesData = [];
    devices.forEach(device => {
      devicesData.push(this.createDeviceData(total, device, this.data[device]))
    });
    const devicesDetails = new DevicesDetails(this.name, devicesData);
    devicesDetails.appendDevicesDetails()
  }

  createSummary(){
    const name = this.name;

    const values = Object.values(this.data);
    const totalValue = sumValues(values);
    const total = formatValue(totalValue, this.isMonetaryValue);

    const summary = new Summary(name, total);

    summary.appendSummary();
  }

  createDeviceData(total, deviceName, deviceData) {
    const percentage = countPercentage(total, deviceData);
    const value = formatValue(deviceData, this.isMonetaryValue);
    return {
      type: deviceName,
      precentage: percentage,
      value: value
    };
  }
}
