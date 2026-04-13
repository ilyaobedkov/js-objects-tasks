import crc32 from 'crc-32';
// Создает новый пустой словарь
export function make() {
  return [];
}
// Устанавливает значение по ключу
export function set(map, key, value) {
  // Вычисляем хеш ключа
  const hash = crc32.str(key);
  // Проверяем, есть ли уже запись с таким хешем
  if (map[hash] !== undefined) {
    // Если запись существует, проверяем совпадение ключей
    const [existingKey] = map[hash];
    if (existingKey === key) {
      // Тот же ключ - обновляем значение
      map[hash] = [key, value];
      return true;
    }
    // Разные ключи с одинаковым хешем - коллизия
    return false;
  }
  // Свободное место - устанавливаем новое значение
  map[hash] = [key, value];
  return true;
}
// Получает значение по ключу
export function get(map, key, defaultValue = null) {
  const hash = crc32.str(key);
  // Проверяем, есть ли запись по этому хешу
  if (map[hash] !== undefined) {
    const [existingKey, value] = map[hash];
    // Проверяем совпадение ключей
    if (existingKey === key) {
      return value;
    }
    // Коллизия - ключи разные, но хеш одинаковый
    return defaultValue;
  }
  // Запись не найдена
  return defaultValue;
}
