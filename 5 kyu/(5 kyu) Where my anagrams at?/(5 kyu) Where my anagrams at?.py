def anagrams(word, words):
    found_anagrams = []

    for item in words:
        if ''.join(sorted(list(item))) == ''.join(sorted(list(word))):
            found_anagrams.append(item)

    return found_anagrams
