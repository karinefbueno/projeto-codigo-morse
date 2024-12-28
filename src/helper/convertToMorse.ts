const morseAlphabet: Record<string, string> = {
  'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
  'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
  'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
  's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
  'y': "-.--", 'z': "--..", ' ': '/'
};

export const convertToMorse = (phrase: string): string => {
  phrase = phrase.toLowerCase().replace(/[^a-z\s]/g, '');
  const letters = [...phrase];
  const morse = letters.map(letter => morseAlphabet[letter] || '');

  return morse.join(' ');
};
