import { validateYear } from "../validators/validateYear";

describe("validateYear", () => {
  const currentYear = new Date().getFullYear();

  it('should return "Required" when value is empty', () => {
    expect(validateYear(undefined)).toBe("Required");
    expect(validateYear(null)).toBe("Required");
  });
});
