// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";
import { daily__listwrap } from "@/styles/main.css";

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
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&regId=11B10101&tmFc=202502081800&dataType=json"
  );

  const json = await test.json();
  const data = json.response.body;
  return data.items.item[0];
}
async function getDailyWeather() {
  const test = await fetch(
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&regId=11B00000&tmFc=202502081800&dataType=json"
  );

  const json = await test.json();
  const data = json.response.body;
  return data.items.item[0];
}
function dailyData(obj: object): object {
  let tempData = [];

  for (const key in obj) {
    if (key.includes("wf")) {
      var regex = /[^0-9]/g;
      var result = key.replace(regex, "");
      tempData[parseInt(result) - 5] = [];
      tempData[parseInt(result) - 5].push(obj[key]);
    }
  }
  return tempData;
}
function translateData(obj: object): object {
  let tempData = [];

  for (const key in obj) {
    if (key.length <= 7 && key !== "regId") {
      var regex = /[^0-9]/g;
      var result = key.replace(regex, "");
      if (key.includes("Min")) {
        tempData[parseInt(result) - 5] = [];
        tempData[parseInt(result) - 5].push(obj[key]);
      }
      if (key.includes("Max")) {
        tempData[parseInt(result) - 5].push(obj[key]);
      }
    }
  }
  return tempData;
}

function setNumber(str: string): number {
  const cutNumber = str.substr(9, 2);
  return Number(cutNumber);
}
export default async function MainHourly() {
  const info = await getCurrentWeather();
  const info2 = await getDailyWeather();
  const newData = await translateData(info);
  const newData2 = await dailyData(info2);

  console.log(newData2, "newData");
  const nd = new Date();
  return (
    <div className={mainCSS.daily}>
      <div className={mainCSS.daily__wrap}>
        <div className={mainCSS.daily__box}>
          <ul className={mainCSS.daily__list}>
            {newData.map((i, index) => {
              return (
                <li className={mainCSS.daily__listwrap}>
                  <span className={mainCSS.daily__listday}>
                    {nd.getDate() + index + 5}일
                  </span>
                  <span>
                    <div
                      className={`${mainCSS.icon__weather} ${
                        mainCSS.icon__weather__small
                      } ${
                        mainCSS[
                          "icon__weather" + code.SKY_STATUS[newData2[index]]
                        ]
                      }`}
                    >
                      {newData2[index]}
                    </div>
                  </span>
                  <span className={mainCSS.daily__listtemp}>
                    {i[0]} {code.WEATHER_UNIT["TMP"]} / {i[1]}
                    {code.WEATHER_UNIT["TMP"]}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
