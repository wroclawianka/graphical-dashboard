export default class PieChart {
  constructor(name, type, data, width = 160, height = 160, volume = 7) {
    this.name = name;
    this.type = type;
    this.data = data;
    this.width = width;
    this.height = height;
    this.volume = volume;
  }

  appendPie() {
    const labels = Object.keys(this.data);
    const values = Object.values(this.data);

    const radius = Math.min(this.width, this.height) / 2;
    const arc = d3.svg
      .arc()
      .innerRadius(radius - this.volume)
      .outerRadius(radius);
    const pie = d3.layout.pie().sort(null);
    const parent = `#${this.name} .content`;

    const svg = d3
      .select(parent)
      .append("svg")
      .attr("class", `pie ${this.type}`)
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        `translate(${this.width/2}, ${this.height/2})`
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
