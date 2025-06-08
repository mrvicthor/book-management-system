import { capitalizeWords } from "../utils/textFormatting";

describe("capitalizeWords", () => {
  it("Should capitalize the first letters of all the words in the string", () => {
    const testString = "the lord of the rings";
    expect(capitalizeWords(testString)).toBe("The Lord Of The Rings");
  });
});
