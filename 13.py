# Python
def min_max(nums):
    # Handle empty array
    if not nums:
        return {"min": None, "max": None}
    
    min_num = nums[0]
    max_num = nums[0]
    
    for num in nums[1:]:
        if num < min_num:
            min_num = num
        if num > max_num:
            max_num = num
    
    return {"min": min_num, "max": max_num}

# Examples
print(min_max([1, -3, 5]))  # {'min': -3, 'max': 5}
print(min_max([-2, 3, -5, 7, 10]))  # {'min': -5, 'max': 10}
print(min_max([]))  # {'min': None, 'max': None}
print(min_max([3]))  # {'min': 3, 'max': 3}