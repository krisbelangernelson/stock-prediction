export function getMockData(symbol: string, daysAgo: number) {
  if (!symbol) return []
  const allDates = []

  for (let i = 0; i < daysAgo; i++) {
    const newDate = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    allDates.unshift(newDate)
  }

  const char = parseInt(symbol.charAt(0), 36) - 9

  return {
    [symbol]: allDates.map((date, i) => {
      const price = Math.random() * char * 10
      const count = price * (i + 1)
      return { date, price: price.toFixed(2), socialMediaCount: count.toFixed(2) }
    })
  }
}
