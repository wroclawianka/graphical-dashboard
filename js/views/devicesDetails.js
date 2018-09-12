import { formatValue, countPercentage, sumValues } from "./helpers.js";

export default class DeviceDetails{
  // append device info
  appendDevicesDetails(name, data, isCurrency) {
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
    this.appendDeviceSection(name, devicesDetails);
  }

  // create section with device details and add it to parent node
  appendDeviceSection(parentName, devicesDetails) {
    const parent = document.getElementById(parentName);
    const deviceValuesEl = this.createDivWithClass("device-values");
    deviceValuesEl.innerHTML = this.createDeviceDetailsHTML(devicesDetails);
    parent.appendChild(deviceValuesEl);
  }

  // create section with device details
  createDeviceDetails(deviceType, percentage, value) {
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
  createDivWithClass(className) {
    const element = document.createElement("div");
    element.setAttribute("class", className);
    return element;
  }

  // create HTML with device details
  createDeviceDetailsHTML(devicesDetails) {
    let html = "";
    devicesDetails.forEach(device => {
      html += this.createDeviceDetails(device.type, device.precentage, device.value);
    });
    return html;
  }
}
