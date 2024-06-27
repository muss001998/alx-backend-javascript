export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // the  eslint-disable-next-line no-restricted-syntax
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
