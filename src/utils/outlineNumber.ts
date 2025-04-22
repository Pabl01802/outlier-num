export const outlierNum = (numbers: number[]): number | null => {
  let outlier: number | null = null;

  if (numbers.length < 3) return null;

  const evenNumbers = numbers.slice(0, 3).filter((num) => num % 2 === 0);
  const outlierType: "ODD" | "EVEN" = evenNumbers.length > 1 ? "ODD" : "EVEN";

  for (let num of numbers) {
    if (num % 2 === 0 && outlierType === "EVEN") {
      outlier = num;
      break;
    } else if (num % 2 !== 0 && outlierType === "ODD") {
      outlier = num;
      break;
    }
  }

  return outlier;
};
