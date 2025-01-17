import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getQueryClient } from "../app/get-query-client";
import { getUser } from "./api/userAPI";
import { useSuspenseQuery } from "@tanstack/react-query";
import * as common from "@/styles/common.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";
import { icon__weather1, info__temperature } from "@/styles/common.css";
// import icon_weather_sunny from "@/assets/images/icon_weather/sunny.png";

export default async function Home() {
  const test = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&base_date=20250117&base_time=0500&nx=55&ny=127&dataType=json"
  );
  const json = await test.json();
  const data = json.response.body;
  const items = data.items.item;
  console.log(icon_weather.icon_weather_sunny);

  return (
    <div>
      <div className={common.boxs}>
        {/*기본 날씨 정보*/}
        <div className={common.box}>
          <div className={common.info}>
            <div className={common.info__wrap}>
              <div className={common.info__icon}>
                {items.map((i) => {
                  return (
                    i.category === "SKY" && (
                      <div
                        className={`${common.icon__weather} ${common["icon__weather1"]}`}
                      >
                        {i.fcstValue}
                      </div>
                    )
                  );
                })}
              </div>
              <div className={common.info__box}>
                {items.map((item) => {
                  return item.category === "TMP" ? (
                    <div className={common.info__temperature}>
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
          </div>
        </div>
        {/*시간대별 날씨*/}
        <div className={common.box}>
          <h2>시간대별 날씨</h2>
          <ul>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
            <li>
              <span>오후1시</span>
              <span>맑음</span>
              <span>3도</span>
            </li>
          </ul>
        </div>
        {/*일별 날씨*/}
        <div className={common.box}>
          <h2>일별날씨예보</h2>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
          <ul>
            <li>2월1일</li>
            <li>맑음</li>
            <li>5도/11도</li>
          </ul>
        </div>
        {/*보건 지수*/}
        <div className={common.box}>
          <h2>미세먼지</h2>
          <div>매우 나쁨</div>
        </div>
      </div>
    </div>
  );
}
