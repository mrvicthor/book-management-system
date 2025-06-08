import { validateYear } from "../validators/validateYear";

describe("validateYear", () => {
  const currentYear = new Date().getFullYear();

  it('Should return "Required" when value is empty', () => {
    expect(validateYear(undefined)).toBe("Required");
    expect(validateYear(null)).toBe("Required");
  });

  it("Should return error if year is less than 1000", () => {
    expect(validateYear(999)).toBe(
      `Year must be between 1000 and ${currentYear}`,
    );
  });

  it("should return error if year is greater than current year", () => {
    expect(validateYear(currentYear + 1)).toBe(
      `Year must be between 1000 and ${currentYear}`,
    );
  });

  it("Should return undefined for a valid year", () => {
    expect(validateYear(2000)).toBeUndefined();
    expect(validateYear(currentYear)).toBeUndefined();
  });
});
