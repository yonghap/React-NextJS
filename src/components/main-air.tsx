// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";

export async function getCurrentWeather() {
  var date = new Date();
  // var yesterday = new Date(date.setDate(date.getDate() - 1));
  var yesterday = new Date(date.setDate(date.getDate()));
  var year = yesterday.getFullYear();
  var month = ("0" + (1 + yesterday.getMonth())).slice(-2);
  var day = ("0" + yesterday.getDate()).slice(-2);

  var newD = year + "-" + month + "-" + day;
  console.log(newD, "newD");
  const test = await fetch(
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&returnType=json&numOfRows=4&pageNo=1&searchDate=" +
      newD +
      "&InformCode=PM10"
  );

  const json = await test.json();
  const data = json.response.body;
  return data.items;
}

function translateData(obj: object): object {
  let tempData = new Object();

  return tempData;
}

function setNumber(str: string): number {
  const cutNumber = str.substr(8, 2);
  return Number(cutNumber);
}
function checkNight(num: number): boolean {
  const nightTime = [19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6];
  return nightTime.includes(num);
}
function setAir(info: string): string {
  const airList = info.split(",");
  const airStats = airList[0].split(":");
  return airStats[1];
}

export default async function MainHourly() {
  const info = await getCurrentWeather();

  const newData = await translateData(info);

  return (
    <div className={mainCSS.air}>
      <div className={mainCSS.airy__wrap}>
        <div className={mainCSS.air__box}>
          <ul className={mainCSS.air__list}>
            {info.map((i) => (
              <li className={mainCSS.air__listwrap}>
                <div>{i.informData}</div>
                <div>{setNumber(i.informData)}</div>
                <div className={mainCSS.hourly__listitem}>
                  {setAir(i.informGrade)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
