import { createDivWithClass, findParentContent } from "./../helpers/DOMHelpers.js";

export default class DeviceDetails{
  constructor(name, devices){
    this.name = name;
    this.devices = devices;
  }

  // create section with device details and add it to parent node
  appendDevicesDetails() {
    const parentContent = findParentContent(this.name);
    const deviceValuesEl = createDivWithClass("device-values");
    deviceValuesEl.innerHTML = this.createDeviceDetailsHTML(this.devices);
    parentContent.appendChild(deviceValuesEl);
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

  // create HTML with device details
  createDeviceDetailsHTML(devicesDetails) {
    let html = "";
    devicesDetails.forEach(device => {
      html += this.createDeviceDetails(device.type, device.precentage, device.value);
    });
    return html;
  }
}
