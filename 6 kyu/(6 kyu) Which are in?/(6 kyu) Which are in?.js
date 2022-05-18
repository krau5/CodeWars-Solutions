function inArray(keys,words){
  const result = [];

  for (word of words) {
    for (key of keys) {
      if (word.includes(key)) {
        result.push(key)
      }
    }
  }

  return Array.from(new Set(result)).sort();
}
