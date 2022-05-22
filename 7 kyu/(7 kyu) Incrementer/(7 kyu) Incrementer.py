def incrementer(nums):
    return list(map(lambda num: num if len(str(num)) == 1 else int(str(num)[-1]), [num + index + 1 for index, num in enumerate(nums)]))
