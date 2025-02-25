// 현재 날짜 구하기
const getToday = (): string => {
  const today = new Date();
  return (
    today.getFullYear() +
    ("0" + (1 + today.getMonth())).slice(-2) +
    ("0" + today.getDate()).slice(-2)
  );
};
const addZeroTime = (num: number): string => {
  return ("00" + num.toString()).slice(-2) + "00";
};

// 단기 예보 시간 날짜 구하기
export const getShortRangeDate = (): Array<string> => {
  const today = new Date();
  const currentHours = today.getHours();
  const currentMinutes = today.getMinutes();
  const forecastTimes = [2, 5, 8, 11, 14, 17, 20, 23];
  const isCurrentAPI = currentMinutes >= 15 ?? false;
  const isYesterDay = (currentHours <= 2 && !isCurrentAPI) ?? false;

  if (isYesterDay) {
    const yesterDayDate = new Date(today.setDate(today.getDate() - 1));
    return [
      yesterDayDate.getFullYear() +
        ("0" + (1 + yesterDayDate.getMonth())).slice(-2) +
        addZeroTime(yesterDayDate.getDate()),
      "2300",
    ];
  } else {
    for (let i = 0; i < forecastTimes.length; i++) {
      if (currentHours === forecastTimes[i]) {
        if (isCurrentAPI) {
          return [getToday(), addZeroTime(forecastTimes[i])];
        } else {
          return [getToday(), addZeroTime(forecastTimes[i - 1])];
        }
      } else if (currentHours < forecastTimes[i]) {
        return [getToday(), addZeroTime(forecastTimes[i - 1])];
      }
    }
  }
};
