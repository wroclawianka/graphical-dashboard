// create div with specified class name
export function createDivWithClass(className) {
  const element = document.createElement("div");
  element.setAttribute("class", className);
  return element;
}

// find div.content of the specified parent
export function findParentContent(parentName) {
  const parent = document.getElementById(parentName);
  const parentContent = parent.getElementsByClassName("content")[0];
  return parentContent;
}
