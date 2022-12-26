function getDisplayDate(dateFormated) {
  const [month, day, year] = dateFormated.split("/");

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  const compDate = new Date(year,month-1,day);
  const diff = today.getTime() - compDate.getTime();
  if (compDate.getTime() == today.getTime()) {
      return "Today";
  } else if (diff <= (24 * 60 * 60 *1000)) {
      return "Yesterday";
  } else {
      return compDate.toLocaleDateString();
  }
}

export function formatDate(date) {
  const dateFormated = new Date(Date.parse(date)).toLocaleDateString()
  return getDisplayDate(dateFormated)
}

