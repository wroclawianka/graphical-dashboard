import {
  formatNumber,
  formatNumberValues,
  formatMonetaryValue
} from "../js/views/helpers";

describe("Helpers", function() {
  // format specified
  describe("when you specify format", function() {
    const format = "en-US";
    const currency = "$";

    // formatNumber
    it(`should format number as ${format}`, function() {
      const value = 20000000;
      const expected = "20,000,000";
      expect(formatNumber(value, format)).toBe(expected);
    });

    // formatNumberValues
    it(`should format number values as ${format}`, function() {
      const values = [80000, 120000];
      const expected = ["80,000", "120,000"];
      expect(formatNumberValues(values, format)).toEqual(expected);
    });

    // formatMonetaryValue
    it(`should format monetary value as ${format}`, function() {
      const value = 20000000;
      const expected = "20,000,000 €";
      expect(formatMonetaryValue(value, format)).toBe(expected);
    });

    // formatMonetaryValue
    it(`should format monetary value with ${format}
      and ${currency} symbol`, function() {
      const value = 20000000;
      const expected = `20,000,000 ${currency}`;
      expect(formatMonetaryValue(value, format, currency)).toBe(expected);
    });
  });

  // default format
  describe("when you do not specify format", function() {
    // formatNumber
    it(`should format number with defaults`, function() {
      const value = 20000000;
      const expected = "20.000.000";
      expect(formatNumber(value)).toBe(expected);
    });

    // formatNumberValues
    it(`should format number with defaults`, function() {
      const values = [80000, 120000];
      const expected = ["80.000", "120.000"];
      expect(formatNumberValues(values)).toEqual(expected);
    });

    // formatMonetaryValue
    it(`should format monetary value with defaults`, function() {
      const value = 20000000;
      const expected = "20.000.000 €";
      expect(formatMonetaryValue(value)).toBe(expected);
    });
  });
});
