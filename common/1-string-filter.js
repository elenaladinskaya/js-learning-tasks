// #1 Фильтрация строки
const string = 'Привет! Как дела?';

const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function getVowels(stringToFilter) {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVowels = extractedVowels + currentLetter;
    }
  }
  return extractedVowels;
} 

console.log('#1 Фильтрация строки: ', getVowels(string));