
export const calculateTrendingScore = (yeah: number, nah: number, timestamp: Date) => {
  const score = yeah - nah;
  const order = Math.log10(Math.max(Math.abs(score), 1));
  const sign = score >= 0 ? 1 : -1;
  const seconds = timestamp.getTime() / 1000;
  
  return sign * order + seconds / 45000;
};
