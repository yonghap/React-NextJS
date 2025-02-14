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
import Header from "@/components/navigation";
import MainInfo from "@/components/main-info";
import MainHourly from "@/components/main-hourly";
import MainDaily from "@/components/main-daily";
import MainAir from "@/components/main-air";
// import icon_weather_sunny from "@/assets/images/icon_weather/sunny.png";

export default async function Home() {
  return (
    <div>
      <Header />
      <div className={common.boxs}>
        {/*기본 날씨 정보*/}
        <div className={common.box}>
          <MainInfo></MainInfo>
        </div>
        {/*시간대별 날씨*/}
        <div className={common.box}>
          <h2 className={common.box__title}>시간대별 날씨</h2>
          <MainHourly />
        </div>
        {/*일별 날씨*/}
        <div className={common.box}>
          <h2 className={common.box__title}>일별날씨예보</h2>
          <MainDaily />
        </div>
        {/*보건 지수*/}
        <div className={common.box}>
          <h2 className={common.box__title}>미세먼지</h2>
          <MainAir />
        </div>
      </div>
    </div>
  );
}
