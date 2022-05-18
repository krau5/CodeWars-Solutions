def in_array(keys, words):
    result = []

    for word in words:
        for key in keys:
            if key in word:
                result.append(key)

    return sorted(set(result))
