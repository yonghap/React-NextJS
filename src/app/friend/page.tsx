// 친구 페이지 ()
// import * as common from "@/styles/common.css";
import * as intro from "@/styles/intro.css";
import Navigation from "@/components/navigation";
import * as header from "@/styles/header.css";

export default async function MyFriends() {
  const response = await fetch(
    "https://api.steampowered.com/ISteamUser/GetFriendList/v1/?key=DE4E090E0811F7AEC9AE8E911FF0B3D7&steamid=76561198872686120"
  );
  const json = await response.json();
  const data = json.friendslist.friends;

  let friendData = [];
  Promise.all(
    data.map((url) =>
      fetch(
        "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=DE4E090E0811F7AEC9AE8E911FF0B3D7&steamids=" +
          url.steamid
      ).then((i) => {
        let tt = i.json();
        console.log("jjj", tt.response.players[0]);
      })
    )
  ).then((r) => {
    // console.log("friendData===", friendData);
  });

  return (
    <div>
      <Navigation />
      <div className={`${common.row} ${common.row__small}`}></div>
    </div>
  );
}
