export const makeDecimals = (price: number, amount: number) => {
  return parseFloat(Number(price * amount).toFixed(2))
}
