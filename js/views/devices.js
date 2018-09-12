import { formatValue, countPercentage, sumValues } from "./helpers.js";

// append device info
export function appendDevicesDetails(name, data, isCurrency) {
  const totalValue = sumValues(data);

  const tabletPercentage = countPercentage(totalValue, data.tablet);
  const tabletValue = formatValue(data.tablet, isCurrency);
  const tabletDetails = {
    type: "tablet",
    precentage: tabletPercentage,
    value: tabletValue
  };

  const smartphonePercentage = countPercentage(totalValue, data.smartphone);
  const smartphoneValue = formatValue(data.smartphone, isCurrency);
  const smartphoneDetails = {
    type: "smartphone",
    precentage: smartphonePercentage,
    value: smartphoneValue
  };
  const devicesDetails = [tabletDetails, smartphoneDetails];
  appendDeviceSection(name, devicesDetails);
}

// create section with device details and add it to parent node
function appendDeviceSection(parentName, devicesDetails) {
  const parent = document.getElementById(parentName);
  const deviceValuesEl = createDivWithClass("device-values");
  const html = createDeviceDetailsHTML(devicesDetails); //TODO one line
  deviceValuesEl.innerHTML = html;
  parent.appendChild(deviceValuesEl);
}

// create section with device details
function createDeviceDetails(deviceType, percentage, value) {
  return `
  <div class="${deviceType}-value">
    <p class="device-type ${deviceType}">${deviceType}</p>
    <p>
      <span class="procentage">${percentage}</span>
      <span class="value">${value}</span>
    </p>
  </div>
  `;
}

// create div with specified class name
function createDivWithClass(className) {
  const element = document.createElement("div");
  element.setAttribute("class", className);
  return element;
}

// create HTML with device details
function createDeviceDetailsHTML(devicesDetails) {
  let html = "";
  devicesDetails.forEach(device => {
    html += createDeviceDetails(device.type, device.precentage, device.value);
  });
  return html;
}
