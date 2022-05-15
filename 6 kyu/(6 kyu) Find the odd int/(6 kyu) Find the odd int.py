def find_it(seq):
    return next(filter(lambda val: seq.count(val) % 2 != 0, seq))
