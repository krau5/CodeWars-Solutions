def count_positives_sum_negatives(arr):
    if (arr == None or len(arr) == 0):
        return []

    return [len(list(filter(lambda val: val > 0, arr))), sum(list(filter(lambda val: val < 0, arr)))]
