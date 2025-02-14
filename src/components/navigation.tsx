"use client";

import Link from "next/link";
import * as common from "@/styles/common.css";
import * as header from "@/styles/header.css";
import { useQuery } from "@tanstack/react-query";

import { usePathname, useSearchParams } from "next/navigation";
import { getQueryClient } from "../app/get-query-client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getUser } from "../app/api/userAPI";

export default function Navigation() {
  // const path = usePathname();
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
  // }
  // console.log("lll", logo);

  return (
    <header id="header">
      <div className={`${common.row} ${header.header__wrap}`}>
        <h1 className={header.logo}>
          <span className={header.title}>Weather Korea</span>
        </h1>
      </div>
    </header>
  );
}
