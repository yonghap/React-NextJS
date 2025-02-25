// 현재 날짜 구하기
const getToday = (): string => {
  const today = new Date();
  return (
    today.getFullYear() +
    ("0" + (1 + today.getMonth())).slice(-2) +
    ("0" + today.getDate()).slice(-2)
  );
};
const addZero = (num: number): string => {
  return ("00" + num.toString()).slice(-2) + "00";
};
// 단기 예보 시간 날짜 구하기
export const getShortRangDate = (): array => {
  const today = new Date();
  const currentHours = today.getHours();
  const currentMinutes = today.getMinutes();
  const forecastTimes = [2, 5, 8, 11, 14, 17, 20, 23];
  const isCurrentAPI = currentMinutes >= 15 ?? false;

  if (currentHours <= 2 && !isCurrentAPI) {
    const yesterDayDate = new Date(today.setDate(today.getDate() - 1));
    return [
      yesterDayDate.getFullYear() +
        ("0" + (1 + yesterDayDate.getMonth())).slice(-2) +
        ("0" + yesterDayDate.getDate()).slice(-2),
      "2300",
    ];
  } else {
    forecastTimes.forEach((time, index) => {
      console.log("dddddddd", addZero(forecastTimes[index]));
      if (currentHours === time) {
        if (isCurrentAPI) {
          return [getToday(), addZero(time)];
        } else {
          return [getToday(), addZero(forecastTimes[index - 1])];
        }
      } else if (currentHours < time) {
        return [getToday(), addZero(forecastTimes[index - 1])];
      }
    });
  }
  // if (currentHours <= 2) forecastTimes.forEach((i) => {});
};
