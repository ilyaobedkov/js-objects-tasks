import _ from 'lodash';
export default function normalize(lesson) {
  // Капитализируем имя с помощью lodash
  if (lesson.name) {
    lesson.name = _.capitalize(lesson.name);
  }
  // Приводим описание к нижнему регистру
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
}
