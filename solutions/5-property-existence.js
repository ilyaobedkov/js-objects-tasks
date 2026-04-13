import _ from 'lodash';
export default function countWords(sentence) {
  // Разбиваем предложение на слова с помощью _.words
  const words = _.words(sentence);
  // Создаем объект для хранения результатов
  const result = {};
  // Проходим по каждому слову
  for (const word of words) {
    // Приводим слово к нижнему регистру
    const lowerWord = word.toLowerCase();
    // Если слово уже есть в объекте, увеличиваем счетчик
    if (result[lowerWord]) {
      result[lowerWord] += 1;
    } else {
      // Если слова нет, добавляем его со значением 1
      result[lowerWord] = 1;
    }
  }
  return result;
}
