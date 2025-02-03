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
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&base_date=" +
      queryDate +
      "&base_time=" +
      queryTime +
      "&nx=55&ny=127&dataType=json"
  );
  const json = await test.json();
  const data = json.response.body;
  return data.items.item;
}

export default async function MainInfo() {
  const info = await getCurrentWeather();
  return (
    <div className={mainCSS.info__wrap}>
      <div className={mainCSS.info__icon}>
        {info.map((i) => {
          return (
            i.category === "SKY" && (
              <div
                className={`${mainCSS.icon__weather} ${common["icon__weather1"]}`}
              >
                {i.fcstValue}
              </div>
            )
          );
        })}
      </div>
      <div className={mainCSS.info__box}>
        {info.map((item) => {
          return item.category === "TMP" ? (
            <div className={mainCSS.info__temperature}>
              {item.fcstValue + code.WEATHER_UNIT[item.category]}
            </div>
          ) : (
            ""
          );
        })}
        <div className="info__meta">
          <div className="info__location">서울시 강남구</div>
          <div className="info__yesterday">어제보다 6°나 높아요</div>
        </div>
      </div>
    </div>
  );
}
