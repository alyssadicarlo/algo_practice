def is_anagram(string1, string2):
    if len(string1) != len(string2):
        return False
    string1_dict = string_to_dict(string1)
    string2_dict = string_to_dict(string2)
    return string1_dict == string2_dict
    
def string_to_dict(string):
    letters = {}
    for character in string:
        if character in letters:
            letters[character] += 1
        else:
            letters[character] = 1
    return letters


print(is_anagram("dog", "god"))
print(is_anagram("rat", "cat"))