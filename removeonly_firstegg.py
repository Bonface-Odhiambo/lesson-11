def remove_egg (foods):
    result = []
    egg_count = 0 # counter for eggs removed

    for i in range(len(foods)):
        if foods [i] == 'egg' and egg_count<2:
            egg_count +=1
            continue
        result.append (foods[i])
    return result
print(remove_egg(['egg', 'apple', 'egg', 'egg', 'ham']))




    
