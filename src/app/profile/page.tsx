// 프로필 페이지 ()
import * as common from "@/styles/common.css";
import * as profile from "@/styles/profile.css";
import Navigation from "@/components/navigation";
import * as header from "@/styles/header.css";

export default async function MyGames() {
  const response = await fetch(
    "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=DE4E090E0811F7AEC9AE8E911FF0B3D7&steamids=76561198037392202"
  );
  const json = await response.json();
  const data = json.response.players[0];
  const menuList = [
    {
      name: "게임 목록",
    },
    {
      name: "게임 목록",
    },
    {
      name: "게임 목록",
    },
  ];
  return (
    <div>
      <Navigation />
      <div className={`${common.row} ${common.row__small}`}>
        <div className={profile.profile__wrap}>
          <div className={profile.profile__box}>
            <div className={profile.profile__figure}>
              <a href={data.profileurl} target="_blank">
                <img className={profile.profile__image} src={data.avatarfull} />
              </a>
            </div>
            <div className={profile.profile__name}>{data.personaname}</div>
          </div>
          <ul className={profile.profile__list}>
            {menuList.map((i) => {
              return <li>{i.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
