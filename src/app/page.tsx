import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getQueryClient } from "../app/get-query-client";
import { getUser } from "./api/userAPI";
import { useSuspenseQuery } from "@tanstack/react-query";

export default async function Home() {
  const test = fetch(
    "https://apihub.kma.go.kr/api/json?authKey=msy5V4ZOSXqMuVeGThl67A"
  );
  const data = await test.json();
  console.log(data.body);
  // const queryClient = getQueryClient();
  // const searchParams = useSearchParams();
  // let data = null;
  // if (searchParams.has("openid.claimed_id")) {
  //   const getFullId = searchParams.get("openid.claimed_id");
  //   const steamID = getFullId.split("/")[5];
  //   data = useSuspenseQuery({
  //     queryKey: ["user"],
  //     queryFn: () => getUser(steamID),
  //   });
  //   console.log("data === ", data);
  // }

  return (
    <div>
      <div className="info">12111111111111113</div>
    </div>
  );
}
