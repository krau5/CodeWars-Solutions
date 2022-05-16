def get_count(sentence):
    vowels_count = 0

    for char in list(sentence):
        print(char)
        if char in ['a', 'e', 'i', 'o', 'u']:
            vowels_count += 1

    return vowels_count
