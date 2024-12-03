"use client";
import { getLocations } from "./client/locations";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const query = useQuery({ queryKey: ["todos"], queryFn: getLocations });
  const queryClient = useQueryClient();

  if (query.isLoading) return <div>Loading...</div>;

  return <div>{query}</div>;
}
