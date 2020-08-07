//                Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = '') {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

//                   Алгоритм
// 1 разбить на массив с элеметами
// 2 присвоить переменной длинну первого слова(элемента)
// 3 через for of сравнить длинну всех слов
// 4 вывести через return самое длинное слово
