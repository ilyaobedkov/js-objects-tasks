export default function is(company1, company2) {
  // Сравниваем три ключевых поля
  return company1.name === company2.name &&
         company1.state === company2.state &&
         company1.website === company2.website;
}
