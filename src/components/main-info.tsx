// 메인 기본 정보 컴포넌트
import * as common from "@/styles/common.css";
import * as code from "@/constants/code";
import * as icon_weather from "@/assets/images/icon_weather/index";

export async function getCurrentWeather() {
  const test = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&base_date=20250119&base_time=0500&nx=55&ny=127&dataType=json"
  );
  const json = await test.json();
  const data = json.response.body;
  return data.items.item;
}

export default async function MainInfo() {
  const info = await getCurrentWeather();
  return (
    <div className={common.box}>
      <div className={common.info}>
        <div className={common.info__wrap}>
          <div className={common.info__icon}>
            {info.map((i) => {
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
            {info.map((item) => {
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
  );
}
