def candies(list, extra_candies):
    max_candies = max(list)
    result = []
    for kid in list:
        if kid + extra_candies >= max_candies:
            result.append(True)
        else:
            result.append(False)
            
    return result


list = [2,3,5,1,3]
print(candies(list, 3))