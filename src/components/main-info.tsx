// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { QueryClient } from "@tanstack/react-query";
import { getShortestRangeDate, getShortRangeDate } from "@/utils/date";

export async function getCurrentWeather() {
  const queryDate = getShortestRangeDate();
  // const result = await fetch(
  //   "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&base_date=" +
  //     queryDate[0] +
  //     "&base_time=" +
  //     queryDate[1] +
  //     "&nx=55&ny=127&dataType=json"
  // );
  const result = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&base_date=20250306&base_time=0200&nx=55&ny=127&dataType=json"
  );
  const json = await result.json();
  return json.response.body.items.item;
}

export default async function MainInfo() {
  const info = await getCurrentWeather();
  return (
    <div className={mainCSS.info__wrap}>
      <div className={mainCSS.info__icon}>
        {info.map((i) => {
          return <div>{i.category}</div>;
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
