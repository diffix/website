const monthsEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function formatDateEn(date: string | Date) {
  if (!date) return date;
  if (typeof date === "string") date = new Date(date);
  return `${monthsEn[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const monthsDe = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

export function formatDateDe(date: string | Date) {
  if (!date) return date;
  if (typeof date === "string") date = new Date(date);
  return `${date.getDate()}. ${monthsDe[date.getMonth()]} ${date.getFullYear()}`;
}
