import { formatNumber } from "../js/views/helpers";

describe("Helpers", function() {
  describe("when you specify format", function() {
    let format = "en-US";

    it(`should format number as ${format}`, function() {
      expect(formatNumber(20000000, format)).toBe("20,000,000");
    });
  });

  describe("when you do not specify format", function() {
    it(`should format number with defaults`, function() {
      expect(formatNumber(20000000)).toBe("20.000.000");
    });
  });
});
