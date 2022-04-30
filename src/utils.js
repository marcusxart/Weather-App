export const dateAndTime = (data) => {
  const dateString = data.split(" ");
  const timeString = dateString[1].split(":");
  const hour = timeString[0];
  const mins = timeString[1];

  const day = new Date().getDate(dateString[0]);
  const getWeekName = new Date(dateString[0]).toLocaleString("default", {
    weekday: "long",
  });
  const getMonth = new Date(dateString[0]).toLocaleString("default", {
    month: "short",
  });
  const getYear = new Date(dateString[0]).getFullYear().toString().substr(-2);

  const currentDate = `${getWeekName}, ${getDay(day)} ${getMonth} ${getYear}`;
  const currentTime = getTime(hour, mins);
  return [currentDate, currentTime];
};

const getDay = (day) => {
  if (day < 10) return `0${day}`;
  else {
    return day;
  }
};

const getTime = (hour, mins) => {
  if (hour < 10) {
    return `0${hour}:${mins}`;
  } else {
    return `${hour}:${mins}`;
  }
};
