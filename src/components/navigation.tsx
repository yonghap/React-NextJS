"use client";

import Link from "next/link";
import * as styles from "./Header.css";
import { useQuery } from "@tanstack/react-query";

import { usePathname, useSearchParams } from "next/navigation";
import { getQueryClient } from "../app/get-query-client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getUser } from "../app/api/userAPI";

export default function Navigation() {
  const path = usePathname();
  const queryClient = getQueryClient();
  const searchParams = useSearchParams();
  let data = null;
  if (searchParams.has("openid.claimed_id")) {
    const getFullId = searchParams.get("openid.claimed_id");
    const steamID = getFullId.split("/")[5];
    data = useSuspenseQuery({
      queryKey: ["user"],
      queryFn: () => getUser(steamID),
    });
  }

  return <header id="header"></header>;
}
