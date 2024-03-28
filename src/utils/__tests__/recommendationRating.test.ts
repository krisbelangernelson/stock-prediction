import recommendationRating from "../recommendationRating"

describe('recommendationRating', () => {
  it('should return buy rating', () => {
    expect(recommendationRating(30, 120)).toEqual('buy')
  })

  it('should return sell rating', () => {
    expect(recommendationRating(70, 60)).toEqual('sell')
  })

  it('should return hold rating', () => {
    expect(recommendationRating(40, 60)).toEqual('hold')
  })
})
