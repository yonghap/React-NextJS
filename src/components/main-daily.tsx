// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
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
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=199&pageNo=1&base_date=" +
      queryDate +
      "&base_time=" +
      queryTime +
      "&nx=55&ny=127&dataType=json"
  );

  const json = await test.json();
  const data = json.response.body;
  console.log("aaaaaaaaaaaaa", queryDate, queryTime);
  return data.items.item;
}

function translateData(obj: object): object {
  let tempData = new Object();
  obj.forEach((i, index) => {
    if (index >= 36) {
      if (i.category === "TMP") {
        tempData[i.fcstDate + "_" + i.fcstTime] = {
          date: i.fcstDate,
          tmp: i.fcstValue,
        };
      }
      if (i.category === "SKY") {
        tempData[i.fcstDate + "_" + i.fcstTime]["sky"] = i.fcstValue;
      }
      if (i.category === "PTY") {
        tempData[i.fcstDate + "_" + i.fcstTime]["pty"] = i.fcstValue;
      }
    }
  });
  console.log("test888", tempData);

  return tempData;
}

function setNumber(str: string): number {
  const cutNumber = str.substr(9, 2);
  return Number(cutNumber);
}
function checkNight(num: number): boolean {
  const nightTime = [19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6];
  return nightTime.includes(num);
}

export default async function MainHourly() {
  const info = await getCurrentWeather();
  const newData = await translateData(info);

  return (
    <div className={mainCSS.hourly}>
      <div className={mainCSS.hourly__wrap}>
        <div className={mainCSS.hourly__box}>
          <ul className={mainCSS.hourly__list}>
            {Object.keys(newData).map((key) => (
              <li className={mainCSS.hourly__listwrap}>
                <div className={mainCSS.hourly__listitem}>
                  <div className={mainCSS.hourly__listtime}>
                    {setNumber(key) + "시"}
                  </div>
                  <div className={mainCSS.hourly__icon}>
                    <div
                      className={`${mainCSS.icon__weather} ${
                        mainCSS.icon__weather__small
                      } ${mainCSS["icon__weather" + newData[key].sky]} ${
                        mainCSS[
                          checkNight(setNumber(key)) && newData[key].sky === "1"
                            ? "night"
                            : ""
                        ]
                      } `}
                    >
                      {newData[key].sky}
                    </div>
                  </div>
                  <div className={mainCSS.hourly__listvalue}>
                    {newData[key].tmp}
                    {code.WEATHER_UNIT["TMP"]}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
