export default function cloneShallow(obj) {
  const clone = {};
  for (const key in obj) {
    // Проверяем, что свойство принадлежит самому объекту, а не прототипу
    if (Object.hasOwn(obj, key)) {
      clone[key] = obj[key];
    }
  }
  return clone;
}
