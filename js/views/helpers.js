export function formatNumber(number, format = "es") {
  return number.toLocaleString(format);
}

export function formatNumberValues(values, format) {
  values.forEach(function(value, index, theArray) {
    theArray[index] = formatNumber(value, format);
  });
  return values;
}

export function formatMonetaryValue(value, format = "es", currency = "€") {
  return `${value.toLocaleString(format)} ${currency}`;
}

export function formatMonetaryValues(values, format, currency) {
  values.forEach(function(value, index, theArray) {
    theArray[index] = formatMonetaryValue(value, format, currency);
  });
  return values;
}

export function countPercentage(total, value) {
  return `${(value * 100) / total}%`;
}

export function sumValues(values) {
  return Object.values(values).reduce((a, b) => a + b, 0)
}

export function formatValue(value, isMonetaryValue, format) {
  return isMonetaryValue ? formatMonetaryValue(value, format, currency) : formatNumber(value, format);
}
