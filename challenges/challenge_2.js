function countHours(year, holidays) {
  const completeDate = holidays
    .map((shortDate) => new Date(shortDate + "/" + year))
    .map((validDate) => validDate.getDay());

  const validDays = completeDate.reduce(
    (obj, item) => {
      if (!(item === 0 || item === 6)) {
        obj["days"] += 1;
      }

      return obj;
    },
    { days: 0 }
  );

  return validDays.days * 2;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
countHours(year, holidays);
countHours(1985, [
  "01/01",
  "01/06",
  "02/02",
  "02/17",
  "02/28",
  "06/03",
  "12/06",
  "12/25",
]);
