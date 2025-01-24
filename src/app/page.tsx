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
import MainInfo from "@/components/main-info";
import MainHourly from "@/components/main-hourly";
// import icon_weather_sunny from "@/assets/images/icon_weather/sunny.png";

export default async function Home() {
  return (
    <div>
      <div className={common.boxs}>
        {/*기본 날씨 정보*/}
        <MainInfo></MainInfo>
        {/*시간대별 날씨*/}
        <div className={common.box}>
          <h2>시간대별 날씨</h2>
          <MainHourly />
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
