import _ from 'lodash';
export default function fill(target, keys, source) {
  // Если список ключей пустой, сливаем все данные
  if (keys.length === 0) {
    Object.assign(target, source);
  } else {
    // Иначе выбираем только указанные ключи из source
    const dataToMerge = _.pick(source, keys);
    Object.assign(target, dataToMerge);
  }
}
