export function getFirstTwoCharacters(inputString: string | null | undefined) {
  if(!inputString)
      return ""
  // Split the input string into words
  const words = inputString.split(" ");

  // Get the first two words
  const firstTwoWords = words.slice(0, 2);

  // Map through the first two words and extract the first character
  const firstChars = firstTwoWords.map((word) => word.charAt(0));

  // Join the first characters into a single string
  return firstChars.join("");
}

