import { sumValues } from "./../helpers/calculationHelpers.js"

export default class Summary{
  constructor(name, total){
    this.name = name;
    this.total = total;
  }

  appendSummary() {
    const html = this.createSummaryHTML();
    const parent = document.getElementById(this.name);
    const parentContent = parent.getElementsByClassName("content")[0];
    const summary = this.createDivWithClass("summary");
    summary.innerHTML = html;
    parentContent.appendChild(summary);
  }

  createSummaryHTML(){
    return `
      <p class="name">${this.name}</p>
      <p class="total">${this.total}</p>
    `
  }

  // create div with specified class name
  createDivWithClass(className) {
    const element = document.createElement("div");
    element.setAttribute("class", className);
    return element;
  }
}
