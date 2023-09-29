import { convertCurrency } from "./convert.currency";
import "@testing-library/jest-dom";
describe("convertCurrency", () => {
  //testing function convert correctly
  it("should be convert currency correctly", async () => {
    const data = await convertCurrency(100, "USD", "IDR");
    expect(data).toBe(1553977);
  });

  //testing catch error
  it("should return error if passing wrong fromCurrency", async () => {
    try {
      await convertCurrency(100, "INVALID_CURRENCY", "IDR");
    } catch (error) {
      expect(error.message).to.equal(
        "Error fetching data: Request failed with status code 4003"
      );
    }
  });
});
