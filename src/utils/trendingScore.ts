
const GRAVITY = 1.8; // Configurable constant that affects decay rate

export const calculateTrendingScore = (
  upvotes: number,
  downvotes: number,
  createdAt: Date
): number => {
  const score = upvotes - downvotes;
  const order = Math.log10(Math.max(Math.abs(score), 1));
  const sign = score > 0 ? 1 : score < 0 ? -1 : 0;
  const secondsAge = (Date.now() - createdAt.getTime()) / 1000;
  const decay = secondsAge / 45000; // ~12.5 hours for score to halve
  
  return sign * order - decay * GRAVITY;
};
