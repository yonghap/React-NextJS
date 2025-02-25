// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";
import { getShortRangeDate } from "@/utils/date";

export async function getCurrentWeather() {
  const queryData = getShortRangeDate();
  const test = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=250&pageNo=1&base_date=" +
      queryData[0] +
      "&base_time=" +
      queryData[1] +
      "&nx=55&ny=127&dataType=json"
  );
  const json = await test.json();
  const data = json.response.body;
  return data.items.item;
}

function translateData(obj: object): object {
  let tempData = new Object();
  const lastIdx = obj.reduce((acc, cur, idx) => {
    if (cur["category"] === "SKY") {
      acc = idx;
    }
    return acc;
  }, null);
  obj.forEach((i, index) => {
    if (index >= 36 && index <= lastIdx) {
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
    <div>
      <div>
        <div>
          <ul className={mainCSS.hourly__list}>
            {Object.keys(newData).map((key) => (
              <li
                key={newData[key].category}
                className={mainCSS.hourly__listwrap}
              >
                <div>
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
                  <div>
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
