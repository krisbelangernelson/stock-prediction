export default function recommendationRating(price: number, counts: number) {
  if (price < 60 && counts / price > 3) return 'buy'

  if (price > 40 && counts / price < 2) return 'sell'

  return 'hold'
}
