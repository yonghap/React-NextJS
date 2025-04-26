"use client";

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
      <div>
        <h1>
          <span>Game Korea</span>
        </h1>
      </div>
    </header>
  );
}
