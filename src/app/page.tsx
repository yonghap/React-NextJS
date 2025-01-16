import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getQueryClient } from "../app/get-query-client";
import { getUser } from "./api/userAPI";
import { useSuspenseQuery } from "@tanstack/react-query";
import * as common from "@/styles/common.css";
import * as code from "@/constants/code";

export default async function Home() {
  const test = await fetch(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=10&pageNo=1&base_date=20250116&base_time=0500&nx=55&ny=127&dataType=json"
  );
  const json = await test.json();
  const data = json.response.body;
  const items = data.items.item;
  console.log(items);

  return (
    <div>
      <div className={common.boxs}>
        <div className={common.box}>
          <div className="info">
            <div className={common.info__wrap}>
              {items.map((item) => {
                return item.category === "TMP" ? (
                  <div className={common.info__temperature}>
                    {" "}
                    {item.fcstValue + code.WEATHER_UNIT[item.category]}{" "}
                  </div>
                ) : (
                  ""
                );
              })}
              <div className={common.info__icon}>
                {items.map((i) => {
                  return (
                    i.category === "SKY" && (
                      <div
                        className={`${common.icon__sky} ${
                          common["icon__sky" + i.fcstValue]
                        }`}
                      >
                        {i.fcstValue}
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
