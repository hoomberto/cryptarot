const getRelevantResults = (cardWeight, results) => {
  if (cardWeight <= -1) {
    let negative = results.filter(result => result.category === "negative" || result.category === "very_negative")
    matching = negative.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  }
  else if (cardWeight > 0) {
    let neutral = results.filter(result => result.category === "neutral")
    matching = neutral.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  }
  else {
    let positive = results.filter(result => result.category === "positive" || result.category === "very_positive")
    matching = negative.filter(result => result.word_association.some(keyword => randomCard.keywords.includes(keyword)))
  }
  return matching
}

export { getRelevantResults }
