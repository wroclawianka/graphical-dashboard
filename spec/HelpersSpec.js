import { formatNumber, formatNumberValues } from "../js/views/helpers";

describe("Helpers", function() {

  // format specified
  describe("when you specify format", function() {
    const format = "en-US";

    it(`should format number as ${format}`, function() {
      const value = 20000000;
      const expected = "20,000,000";
      expect(formatNumber(value, format)).toBe(expected);
    });

    it(`should format number values as ${format}`, function() {
      const values = [80000, 120000];
      const expected = ["80,000", "120,000"];
      expect(formatNumberValues(values, format)).toEqual(expected);
    });
  });

   // default format
  describe("when you do not specify format", function() {
    it(`should format number with defaults`, function() {
      const value = 20000000;
      const expected = "20.000.000";
      expect(formatNumber(value)).toBe(expected);
    });

    it(`should format number with defaults`, function() {
      const values = [80000, 120000];
      const expected = ["80.000", "120.000"];
      expect(formatNumberValues(values)).toEqual(expected);
    });
  });
});
