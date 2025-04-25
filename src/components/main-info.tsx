/* 현재 날씨 */
'use client';

import { useQuery } from '@tanstack/react-query';
import * as code from "@/constants/code";
import * as commonCSS from "@/styles/common.css";
import * as mainCSS from "@/styles/main.css";
import { getShortestRangeDate } from "@/utils/date";
import { setCurrentWeather } from "@/utils/weather";

async function fetchData() {
	const queryDate = getShortestRangeDate();
	const result = await fetch(
		"http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=50&pageNo=1&base_date=" +
		queryDate[0] +
		"&base_time=" +
		queryDate[1] +
		"&nx=55&ny=127&dataType=json"
	);
	if (!result.ok) throw new Error('데이터를 불러오는데 실패했습니다.');
	const json = await result.json();
	return json.response.body.items.item;
}

export async function getCurrentWeather() {
  const queryDate = getShortestRangeDate();
  const result = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=50&pageNo=1&base_date=" +
      queryDate[0] +
      "&base_time=" +
      queryDate[1] +
      "&nx=55&ny=127&dataType=json"
  );
  const json = await result.json();
  return json.response.body.items.item;
}

function checkNight(sky:number): string {
	const today = new Date();
	const currentHours = today.getHours();
	const nightTime = [19, 20, 21, 22, 23, 24, 0, 1, 2, 3, 4, 5, 6];
	return nightTime.includes(currentHours) ? sky + '__night' : sky;
}

export default async function MainInfo() {
	const { data, error, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: () => fetchData(),
	});

	const weatherData = setCurrentWeather(data);
  return (
    <div className={mainCSS.info__wrap}>
      <div>
        <div
          className={[
	          mainCSS.icon__weather,
	          mainCSS.icon__weather__large,
	          mainCSS['icon__weather__' + checkNight(weatherData['SKY'])]
          ].join(' ')}>
	        {code.SKY_CODE[weatherData['SKY']]}
        </div>
      </div>
      <div className={mainCSS.info__box}>
	      <div className={mainCSS.info__temperature}>
		      {weatherData['T1H']}
		      <small className={commonCSS.unit}>
			      {code.WEATHER_UNIT['TMP']}
		      </small>
	      </div>
        <div className="info__meta">
	        <div className={mainCSS.info__text}>
		        {code.SKY_CODE[weatherData['SKY']]}
	        </div>
	        <div className={mainCSS.info__yesterday}>어제보다 6°나 높아요</div>
	        <div className={mainCSS.info__location}>서울시 강남구</div>
        </div>
      </div>
    </div>
  );
}