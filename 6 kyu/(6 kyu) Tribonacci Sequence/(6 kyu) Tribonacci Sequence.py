def tribonacci(signature, n):
    if n == 0:
        return []

    if n < 3:
        return [signature[i] for i in range(0,n)]

    for i in range(3,n):
        signature.append(signature[i-1] + signature[i-2] + signature[i-3])

    return signature
