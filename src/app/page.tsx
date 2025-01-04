"use client";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getQueryClient } from "../app/get-query-client";
import { getUser } from "./api/userAPI";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Home() {
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
      <div className="info">123</div>
    </div>
  );
}
