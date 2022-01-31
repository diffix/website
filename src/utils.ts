const months = [
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

export function formatDate(date: string | Date) {
  if (!date) return date;

  if (typeof date === "string") {
    date = new Date(date);
  }

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
