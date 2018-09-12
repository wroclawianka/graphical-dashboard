export default class PieChart {
  constructor(width, height, volume) {
    this.width = 160;
    this.height = 160;
    this.volume = 7;
  }

  appendSVG(name, type, data) {
    const labels = Object.keys(data);
    const values = Object.values(data);

    const radius = Math.min(this.width, this.height) / 2;
    const arc = d3.svg
      .arc()
      .innerRadius(radius - this.volume)
      .outerRadius(radius);
    const pie = d3.layout.pie().sort(null);
    const parent = `#${name}`;

    const svg = d3
      .select(parent)
      .append("svg")
      .attr("class", `pie ${type}`)
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
}
