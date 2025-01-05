// 인트로 페이지 ()
import * as intro from "@/styles/intro.css";
import { logo } from "../../../public/images/index";

export default function Intro() {
  return (
    <div id="intro" className={intro.intro}>
      <div className={intro.intro__wrap}>
        <div className={intro.intro__logo}>
          <img src={logo.src} />
        </div>
        <h2 className={intro.intro__title}>SteamWorld</h2>
        <div>
          <form action="https://steamcommunity.com/openid/login" method="post">
            <input
              type="hidden"
              name="openid.identity"
              value="http://specs.openid.net/auth/2.0/identifier_select"
            />
            <input
              type="hidden"
              name="openid.claimed_id"
              value="http://specs.openid.net/auth/2.0/identifier_select"
            />
            <input
              type="hidden"
              name="openid.ns"
              value="http://specs.openid.net/auth/2.0"
            />
            <input type="hidden" name="openid.mode" value="checkid_setup" />
            <input
              type="hidden"
              name="openid.realm"
              value="http://localhost:3000/"
            />
            <input
              type="hidden"
              name="openid.return_to"
              value="http://localhost:3000/"
            />
            <button type="submit" className={intro.intro__button}>
              Login with Steam
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
