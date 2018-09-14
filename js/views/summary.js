import { createDivWithClass, findParentContent } from "./../helpers/DOMHelpers.js"

export default class Summary{
  constructor(name, total){
    this.name = name;
    this.total = total;
  }

  appendSummary() {
    const html = this.createSummaryHTML();
    const parentContent = findParentContent(this.name);
    const summary = createDivWithClass("summary");
    summary.innerHTML = html;
    parentContent.appendChild(summary);
  }

  createSummaryHTML(){
    return `
      <p class="name">${this.name}</p>
      <p class="total">${this.total}</p>
    `
  }
}
