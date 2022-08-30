export function roundBalance(balance: string, decimals: number = 2) {
  return parseFloat(Number(balance).toFixed(decimals));
}

export function formatLongNumber(number: number) {
  const formatted = number
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formatted;
}
