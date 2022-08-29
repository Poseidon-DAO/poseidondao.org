export function roundBalance(balance: string, decimals: number = 2) {
  return parseFloat(Number(balance).toFixed(decimals));
}

export function formatLongNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
