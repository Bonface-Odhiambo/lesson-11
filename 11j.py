# Python
def add_num(array, num):
    return [x + num for x in array]

# Examples
print(add_num([1, 2, 3], 2))  # [3, 4, 5]
print(add_num([1, 2, 3], 3))  # [4, 5, 6]
print(add_num([-2, -1, 0, 99], 2))  # [0, 1, 2, 101]