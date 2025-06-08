export const validateYear = (value: number) => {
  if (!value) return "Required";
  const currentYear = new Date().getFullYear();
  if (value < 1000 || value > currentYear) {
    return `Year must be between 1000 and ${currentYear}`;
  }
  return undefined;
};
