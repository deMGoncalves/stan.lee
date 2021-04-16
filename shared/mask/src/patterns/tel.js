export default (value) =>
  value
  .replace(/\D/g, "")
  .slice(0,11)
  .replace(/^(\d{2})(\d)/g, "($1)$2")
  .replace(/(\d)(\d{4})$/, "$1-$2")