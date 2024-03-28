export function getMockData(symbol: string, daysAgo: number) {
  const allDates = []

  for (let i = 0; i < daysAgo; i++) {
    const newDate = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleString('en-US', { timeZone: 'America/New_York' }).split(',')[0].split('/')
    allDates.push(`${newDate[0]}/${newDate[1]}`)
  }

  const char = parseInt(symbol.charAt(0), 36) - 9

  return allDates.map((date) => {
    const price = Math.random() * char * 10
    const count = Math.ceil((Math.random() * 10 + Math.random() * 10) * 10)

    return { date, price: Number(price.toFixed(2)), socialMediaCount: count }
  })
}
