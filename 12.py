
def count_positive(nums):
    return len([num for num in nums if num > 0])

# Examples
print(count_positive([1, -3, 5]))  # 2
print(count_positive([-2, 3, -5, 7, 10]))  # 3