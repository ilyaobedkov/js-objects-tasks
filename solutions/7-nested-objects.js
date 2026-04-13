export default function get(obj, keys) {
  let current = obj;
  for (const key of keys) {
    // Если current не объект или у него нет указанного ключа
    if (current === null || typeof current !== 'object' || !Object.hasOwn(current, key)) {
      return null;
    }
    current = current[key];
  }
  return current;
}
