import { queryOptions } from "@tanstack/react-query";

export const getUser = {
  queryKey: ["user"],
  queryFn: async () => {
    const response = await fetch(
      "http://gameb.co.kr/steam/user/getuser/?id=" + "76561198037392202"
    );

    return response.json();
  },
};
