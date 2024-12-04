def remove_egg(foods):
    result = []
    for food in foods:
        if food == 'egg':
            continue
        result.append(food)
    return result  
print (remove_egg(['egg','ham', 'apple','mango', 'beef', 'egg', 'banana']))    
