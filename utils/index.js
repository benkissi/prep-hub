export const formArray = (array, item) => {
  const length = array.length;
  let newArray = [...array];
  const randomIndex = Math.floor(Math.random() * length);
  newArray.splice(randomIndex, 0, item);
  return newArray;
};

export const formatDate = (date) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return (
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()
  );
};

export function secondsToHms(seconds) {
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins, ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
  return hDisplay + mDisplay + sDisplay;
}

export const getDateMonthYear = (dateObject) => {
  const month = dateObject.getUTCMonth() + 1; //months from 1-12
  const day = dateObject.getUTCDate();
  const year = dateObject.getUTCFullYear();
  return day + "/" + month + "/" + year;
};
