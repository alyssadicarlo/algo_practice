def remove_duplicates(string):
    new_string = ""
    characters = []
    for i in range(len(string)):
        if string[i] not in characters or string[i] == " ":
            characters.append(string[i])
            new_string += string[i]
    return new_string

print(remove_duplicates("Loops are cool!!"))
        