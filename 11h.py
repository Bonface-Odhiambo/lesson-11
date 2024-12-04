def add_one(array):
    new_array = []
    for i in range(len(array)):
        new_array.append(array[i] + 1)
    return new_array

# Examples:
print(add_one([1, 2, 3]))  # Output: [2, 3, 4]
print(add_one([-2, -1, 0, 99]))  # Output: [-1, 0, 1, 100]