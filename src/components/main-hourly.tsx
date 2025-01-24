// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";

export async function getCurrentWeather() {
  // 오늘 날짜 구하기 0000
  let targetDate = new Date();
  const forecastTime = [2, 5, 8, 11, 14, 17, 20, 23];
  const currentHours = targetDate.getHours(); // 14
  let target = 0;
  for (var i = 0; i < forecastTime.length; i++) {
    if (currentHours <= 2) {
      targetDate = new Date(targetDate.setDate(targetDate.getDate() - 1));
      target = 23;
      break;
    } else if (currentHours <= forecastTime[i]) {
      target = forecastTime[i - 1];
      break;
    }
  }
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const newDay =
    ("00" + month.toString()).slice(-2) + ("00" + day.toString()).slice(-2);
  const queryDate = year + newDay;
  const queryTime = ("00" + target.toString()).slice(-2) + "00";

  const test = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=150&pageNo=1&base_date=" +
      queryDate +
      "&base_time=" +
      queryTime +
      "&nx=55&ny=127&dataType=json"
  );
  const json = await test.json();
  const data = json.response.body;

  return data.items.item;
}

function setNumber(str: string): number {
  console.log("dddddddddddd", str);

  const cutNumber = str.substr(0, 2);
  return Number(cutNumber);
}

export default async function MainHourly() {
  const info = await getCurrentWeather();
  let hour;
  return (
    <div className={common.hourly}>
      <div className={common.hourly__wrap}>
        <div className={common.hourly__box}>
          <ul className={common.hourly__list}>
            {info.map((item, index) => {
              if (item.fcstTime && item.category === "TMP" && index >= 30) {
                return (
                  <li className={common.hourly__listwrap}>
                    <div className={common.hourly__listitem}>
                      <div className={common.hourly__listtime}>
                        {setNumber(item.fcstTime) + "시"}
                      </div>
                      <div className={common.hourly__listvalue}>
                        {item.fcstValue}
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
