export function splitString(str: string): string {
  return str.split("_").join(" ");
}

export function concatenateParams(param1: string, param2: string): string {
  return param1 + param2;
}


export function isLeapYear(year: number): boolean {
  
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
 
  return year % 400 === 0;
}

export const getHandshake = (input: number): string[] => {
  const ops = ["wink", "double blink", "close your eyes", "jump"];
  const sequence = ops.filter((_, index) => input & (2 ** index));
  return input & 16 ? sequence.reverse() : sequence;
};