export const formatNumber = (num: number) => {
  if (num > 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
  if (num > 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
  return num.toLocaleString();
};
