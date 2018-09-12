export function formatNumber(number) {
  return number.toLocaleString("es");
}

export function formatNumberValues(values) {
  values.forEach(function(value, index, theArray) {
    theArray[index] = formatNumber(value);
  });
  return values;
}

export function formatCurrency(value) {
  return `${value.toLocaleString("es")} €`;
}

export function formatCurrencyValues(values) {
  values.forEach(function(value, index, theArray) {
    theArray[index] = formatCurrency(value);
  });
  return values;
}

export function countPercentage(total, value) {
  return `${(value * 100) / total}%`;
}

export function sumValues(values) {
  return Object.values(values).reduce((a, b) => a + b, 0)
}

export function formatValue(value, isCurrency) {
  return isCurrency ? formatCurrency(value) : formatNumber(value);
}
