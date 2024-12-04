
def count_words(words):
    counts = {}
    
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    
    return counts

# Example
print(count_words(['apple', 'grape', 'apple', 'apple']))
# Output: {'apple': 3, 'grape': 1}