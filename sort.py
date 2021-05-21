def bubble_sort(list):
    sorted_count = 0
    while sorted_count != len(list)-1:
        sorted_count = 0
        for i in range(len(list)-1):
            if list[i] > list[i+1]:
                swap(list, i, i+1)
            else:
                sorted_count += 1
    return list
    
def swap(list, index1, index2):
    list[index1], list[index2] = list[index2], list[index1]
    
    
list = [3,1,4,2, 9, 4, 1, 6, 30, 0, 4]
print(bubble_sort(list))