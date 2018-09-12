import {
  formatNumber,
  formatNumberValues,
  formatCurrency,
  formatCurrencyValues,
  countPercentage
} from "./helpers.js";
import { appendDeviceSection } from "./devices.js"

export default class Figure {
  constructor(name, type, data, isCurrency) {
    this.name = name;
    this.type = type;
    this.data = data;
    this.isCurrency = isCurrency;
    this.width = 160;
    this.height = 160;
    this.volume = 7;
  }

  createDiagram() {
    this.createSVG();
    this.appendInfo();
  }

  createSVG() {
    const labels = Object.keys(this.data);
    const values = Object.values(this.data);
    const radius = Math.min(this.width, this.height) / 2;
    const arc = d3.svg
      .arc()
      .innerRadius(radius - this.volume)
      .outerRadius(radius);
    const pie = d3.layout.pie().sort(null);
    const parent = `#${this.name}`;

    const svg = d3
      .select(parent)
      .append("svg")
      .attr("class", `pie ${this.type}`)
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );

    svg
      .selectAll("path")
      .data(pie(values))
      .enter()
      .append("path")
      .attr("class", function(d, i) {
        return labels[i];
      })
      .attr("d", arc);
  }

  appendInfo() {
    const label = this.name.toUpperCase();
    const totalValue = Object.values(this.data).reduce((a, b) => a + b, 0);
    const tabletPercentage = countPercentage(totalValue, this.data.tablet);
    const smartphonePercentage = countPercentage(totalValue, this.data.smartphone);

    let total, tabletValue, smartphoneValue;

    if (this.isCurrency) {
      [total, tabletValue, smartphoneValue] = formatCurrencyValues([
        totalValue,
        this.data.tablet,
        this.data.smartphone
      ]);
    } else {
      [total, tabletValue, smartphoneValue] = formatNumberValues([
        totalValue,
        this.data.tablet,
        this.data.smartphone
      ]);
    }

    const tabletDetails = {
      type: "tablet",
      precentage: tabletPercentage,
      value: tabletValue
    }
    const smartphoneDetails = {
      type: "smartphone",
      precentage: smartphonePercentage,
      value: smartphoneValue,
    }
    const devicesDetails = [tabletDetails, smartphoneDetails];
    appendDeviceSection(this.name, devicesDetails);
}

}
