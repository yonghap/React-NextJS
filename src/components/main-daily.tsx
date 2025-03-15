// 메인 일별 날짜 예보
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";
import { daily__listwrap } from "@/styles/main.css";
import { getLongRangeDate } from "@/utils/date";

// 중기 기온 예보
export async function getMidTaFcst() {
  const queryData = getLongRangeDate();
  const test = await fetch(
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&regId=11B10101&tmFc=" +
      queryData.date +
      "&dataType=json"
  );

  const json = await test.json();
  const data = json.response.body;
	return {
		'taData' : data.items.item[0],
		'fcstDays' : queryData.fcstDays
	};
}
// 중기 육상 예보
async function getMidLandFcst() {
  const queryData = getLongRangeDate();
  const test = await fetch(
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&regId=11B00000&tmFc=" +
	  queryData.date +
      "&dataType=json"
  );

  const json = await test.json();
  const data = json.response.body;
  return {
		'fcstData' : data.items.item[0],
	  'fcstDays' : queryData.fcstDays
  };
}

function translateTaData(obj: object, days : number): object {
	let tempData = [];
	for (const key in obj) {
		if (key.length <= 7 && key !== "regId") {
			var regex = /[^0-9]/g;
			var result = key.replace(regex, "");

			if (key.includes("Min")) {
				tempData[parseInt(result) - days] = [];
				tempData[parseInt(result) - days].push(obj[key]);
			}
			if (key.includes("Max")) {
				tempData[parseInt(result) - days].push(obj[key]);
			}
		}
	}
	return tempData;
}
function translateLandData(obj: object, days : number): object {
  let tempData = [];

  for (const key in obj) {
    if (key.includes("wf")) {
      var regex = /[^0-9]/g;
      var result = key.replace(regex, "");
	    if (key.includes("Am")) {
		    tempData[parseInt(result) - days] = [];
		    tempData[parseInt(result) - days].push(obj[key]);
	    } else if (key.includes("Pm")) {
		    tempData[parseInt(result) - days].push(obj[key]);
	    } else {
		    tempData[parseInt(result) - days] = [];
		    tempData[parseInt(result) - days].push(obj[key]);
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
  const { taData, fcstDays } = await getMidTaFcst();
  const { fcstData } = await getMidLandFcst();
  const newData = await translateTaData(taData, fcstDays);
  const newData2 = await translateLandData(fcstData, fcstDays);

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
                    {newData2[index][0]}
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
