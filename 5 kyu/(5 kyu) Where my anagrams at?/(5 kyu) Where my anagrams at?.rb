def anagrams(word, words)
  words.select {|item| item.chars.sort.join == word.chars.sort.join }
end
