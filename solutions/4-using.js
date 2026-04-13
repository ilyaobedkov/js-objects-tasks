export default function getDomainInfo(domain) {
  // Определяем протокол по умолчанию
  let scheme = 'http';
  let name = domain;
  // Проверяем, начинается ли строка с 'https://'
  if (domain.startsWith('https://')) {
    scheme = 'https';
    name = domain.replace('https://', '');
  } 
  // Проверяем, начинается ли строка с 'http://'
  else if (domain.startsWith('http://')) {
    scheme = 'http';
    name = domain.replace('http://', '');
  }
  // Возвращаем объект с результатами
  return { scheme, name };
}
