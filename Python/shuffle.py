def shuffle(s, indices):
    word = [0 for _ in range(len(s))]
        
    for index in range(len(s)):
        temp = indices[index]
        word[temp] = s[index]
    
    return "".join(word)

s = "odce"
indices = [1,2,0,3]

print(shuffle(s, indices))