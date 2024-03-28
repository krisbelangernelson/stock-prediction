import { getMockData } from "../generateMockData"

describe('recommendationRating', () => {
  it('should return data for 10 days', () => {
    const result = getMockData('META', 10)
    expect(result.length).toEqual(10)
  })
})
