// 메인 일별 날짜 예보
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";
import { daily__listwrap } from "@/styles/main.css";
import { getLongRangeDate } from "@/utils/date";

export async function getCurrentWeather() {
  const queryData = getLongRangeDate();
  const test = await fetch(
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&regId=11B10101&tmFc=" +
      queryData +
      "&dataType=json"
  );

  const json = await test.json();
  const data = json.response.body;
  return data.items.item[0];
}
async function getDailyWeather() {
  const queryData = getLongRangeDate();
  const test = await fetch(
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&regId=11B00000&tmFc=" +
      queryData +
      "&dataType=json"
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

  const nd = new Date();
  return (
    <div>
      <div>
        <div>
          <ul>
            {newData.map((i, index) => {
              return (
                <li key={index} className={mainCSS.daily__listwrap}>
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
