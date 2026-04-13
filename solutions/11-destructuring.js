export default function getSortedNames(users) {
  // Извлекаем имена с помощью деструктуризации
  const names = [];
  for (const { name } of users) {
    names.push(name);
  }
  // Сортируем имена в алфавитном порядке
  return names.sort();
}
