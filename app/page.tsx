"use client";
import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "../app/get-query-client";
import { getLocations } from "./client/locations";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getLocations);
  const { data } = useSuspenseQuery(getLocations);

  return <div>{JSON.stringify(data)}</div>;
}
