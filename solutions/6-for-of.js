export default function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    // Проверяем, существует ли свойство в исходном объекте
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
