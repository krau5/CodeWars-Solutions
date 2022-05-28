def open_or_senior(data):
    return list(map(lambda item: 'Senior' if item[0] >= 55 and item[1] > 7 else 'Open', data))
