const getRelevantResults = (cardWeight, keywords, results) => {
  let matching;
  if (cardWeight <= -1) {
    let negative = results.filter(result => result.category === "negative" || result.category === "very_negative")
    matching = negative.filter(result => result.word_association.some(keyword => keywords.includes(keyword)))
  }
  else if (cardWeight > 0) {
    let neutral = results.filter(result => result.category === "neutral")
    matching = neutral.filter(result => result.word_association.some(keyword => keywords.includes(keyword)))
  }
  else {
    let positive = results.filter(result => result.category === "positive" || result.category === "very_positive")
    matching = positive.filter(result => result.word_association.some(keyword => keywords.includes(keyword)))
  }
  return matching
}

const formatResults = (tagline, keywords, symbol) => {
  let injectResult = ''
  if (tagline.includes('[crypto2]')) {
    injectResult = tagline.replace('[crypto1]', symbol[0].name)
    injectResult = injectResult.replace('[crypto2]', symbol[1].name)
    injectResult = injectResult.replace('[keyword1]', keywords[0].toUpperCase())
    injectResult = injectResult.replace('[keyword2]', keywords[1].toUpperCase())
  }
  else {
    injectResult = tagline.replace('[crypto1]', symbol[0].name)
    injectResult = injectResult.replace('[keyword1]', keywords[0].toUpperCase())
  }

  // injectResult = tagline.replace('[crypto1]', symbol)
  // injectResult = injectResult.replace('[keyword1]', keywords[0].toUpperCase())
  injectResult = injectResult.replace(/’’/g, '\'')
  injectResult = injectResult.replace('‘', '\'')
  injectResult = injectResult.replace('’', '\'')

  return injectResult
}

export { getRelevantResults, formatResults }
