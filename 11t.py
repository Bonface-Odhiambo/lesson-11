def remove_eggs (foods):
    reversed_foods = list(reversed (foods)) # correctly reversed the foods in the array
    result = []
    egg_count = 0

    # Loop through the reversed array containing foods
    for item in reversed_foods:
        if item == 'egg' and egg_count <2:
            egg_count =+1
            continue
        result.append (item)

    # return the result reversed back to the original order
    return list (reversed (result))


print (remove_eggs(['egg', 'apple', 'egg', 'egg', 'ham'])) # print the output to the terminal