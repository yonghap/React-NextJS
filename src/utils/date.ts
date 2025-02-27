// 오늘 날짜 구하기
const getToday = (): string => {
  const today = new Date();
  return (
    today.getFullYear() +
    ("0" + (1 + today.getMonth())).slice(-2) +
    ("0" + today.getDate()).slice(-2)
  );
};

// 0 문자열 추가(날짜)
const addZeroDate = (num: number): string => {
  return ("00" + num.toString()).slice(-2);
};

// 0 문자열 추가(시간)
const addZeroTime = (num: number): string => {
  return ("00" + num.toString()).slice(-2) + "00";
};

// 단기 예보 시간 날짜/시간 구하기
export const getShortRangeDate = (): Array<string> => {
  const today = new Date();
  const yesterDayDate = new Date(today.setDate(today.getDate() - 1));
  const currentHours = today.getHours();
  const currentMinutes = today.getMinutes();
  const forecastTimes = [2, 5, 8, 11, 14, 17, 20, 23];
  const isCurrentAPI = currentMinutes >= 15 ?? false;
  const isYesterDay = currentHours <= 1;

  if (isYesterDay) {
    console.log("qaqaqa3");
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
          if (currentHours === 2) {
            return [
              yesterDayDate.getFullYear() +
                ("0" + (1 + yesterDayDate.getMonth())).slice(-2) +
                addZeroDate(yesterDayDate.getDate()),
              "2300",
            ];
          }
        }
      } else if (currentHours < forecastTimes[i]) {
        return [getToday(), addZeroTime(forecastTimes[i - 1])];
      }
    }
  }
};

// 중기 예보 시간 날짜/시간 구하기
export const getLongRangeDate = (): string => {
  const today = new Date();
  const yesterDayDate = new Date(today.setDate(today.getDate() - 1));
  const currentHours = today.getHours();
  const currentMinutes = today.getMinutes();
  const currentTime =
    currentHours < 6 ? "yesterday" : currentHours < 18 ? "day" : "night";
  switch (currentTime) {
    case "yesterday":
      return (
        yesterDayDate.getFullYear() +
        ("0" + (1 + yesterDayDate.getMonth())).slice(-2) +
        addZeroDate(yesterDayDate.getDate()) +
        "1800"
      );
      break;
    case "day":
      return (
        today.getFullYear() +
        ("0" + (1 + today.getMonth())).slice(-2) +
        addZeroDate(today.getDate()) +
        "0600"
      );
      break;
    case "night":
      return (
        today.getFullYear() +
        ("0" + (1 + today.getMonth())).slice(-2) +
        addZeroTime(today.getDate()) +
        "1800"
      );
      break;
  }
};
