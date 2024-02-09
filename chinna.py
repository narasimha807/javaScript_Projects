def unique_combinations(given_words):
    # Create an empty set to store unique sentences.
    sentences_set = set()

    # Create a copy of the input list of words.
    unique_words = given_words.copy()

    # Iterate through each word in the given_words list.
    for i in given_words:
        # Remove the current word from the unique_words list to avoid using it in the same sentence.
        unique_words.remove(i)

        # Create an empty tuple to hold word combinations.
        tuplex = ()

        # Iterate through each remaining word in the unique_words list.
        for j in unique_words:
            # Create a tuple of the two words, with the words sorted in lexicographical order.
            tuplex = i, j

            # Add the sorted tuple to the sentences_set.
            sentences_set.add(tuple(sorted(list(tuplex))))

            # Reset the unique_words list to the original list of words.
            unique_words = given_words.copy()


    # Convert the set of unique sentence tuples to a list and sort it.
    combination_list = list(sentences_set)
    combination_list.sort()

    # Return the sorted list of unique sentence tuples.
    return combination_list

# Get input from the user, split it into words using spaces, and sort the words lexicographically.
given_words = sorted(input().split(" "))

# Call the unique_combinations function with the sorted list of words.
combination_list = unique_combinations(given_words)

# Iterate through the list of unique sentence tuples and print each tuple's elements.
for i in combination_list:
    print(*i)
