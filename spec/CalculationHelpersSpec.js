import {
  formatNumber,
  formatNumberValues,
  formatMonetaryValue,
  formatMonetaryValues,
  countPercentage,
  sumValues,
  formatValue
} from "./../js/helpers/calculationHelpers.js";

describe("Calculation helpers", function() {
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

    // formatMonetaryValues
    it(`should format monetary values with ${format}`, function() {
      const values = [80000, 120000];
      const expected = ["80,000 €", "120,000 €"];
      expect(formatMonetaryValues(values, format)).toEqual(expected);
    });

    // formatMonetaryValues
    it(`should format monetary values with ${format}
      and ${currency} symbol`, function() {
      const values = [80000, 120000];
      const expected = [`80,000 ${currency}`, `120,000 ${currency}`];
      expect(formatMonetaryValues(values, format, currency)).toEqual(expected);
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

    // formatMonetaryValues
    it(`should format monetary values with defaults`, function() {
      const values = [80000, 120000];
      const expected = ["80.000 €", "120.000 €"];
      expect(formatMonetaryValues(values)).toEqual(expected);
    });
  });

  it("should count percentage", function() {
    const total = 15000;
    const value = 1500;
    const expected = "10%";
    expect(countPercentage(total, value)).toBe(expected);
  });

  it("should sum values", function() {
    const values = [15000, 2500, 100, 50];
    const value = 2500;
    const expected = 17650;
    expect(sumValues(values)).toBe(expected);
  });

  // format value
  describe("when value is monetary", function() {
    const isMonetaryValue = true;
    it("should be formatted as monetary value", function() {
      const value = 100000;
      const expected = "100.000 €";
      expect(formatValue(value, isMonetaryValue)).toBe(expected);
    });

    describe("and additional parameters is specified", function() {
      const format = "en-US";
      const currency = "$";
      it(`should be formatted with ${format}`, function() {
        const value = 100000;
        const expected = "100,000 €";
        expect(formatValue(value, isMonetaryValue, format)).toBe(expected);
      });

      it(`should be formatted with ${format} and currency symbol`, function() {
        const value = 100000;
        const expected = `100,000 ${currency}`;
        expect(formatValue(value, isMonetaryValue, format, currency)).toBe(
          expected
        );
      });
    });
  });

  // format value
  describe("when value is number", function() {
    const isMonetaryValue = false;
    it("should formatted as number", function() {
      const value = 100000;
      const expected = "100.000";
      expect(formatValue(value)).toBe(expected);
    });

    describe("and additional parameters is specified", function() {
      const format = "en-US";

      it(`should be formatted with ${format}`, function() {
        const value = 100000;
        const expected = "100,000";
        expect(formatValue(value, isMonetaryValue, format)).toBe(expected);
      });
    });
  });
});
