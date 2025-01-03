"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <header>
      <div className="max-w-5xl m-auto flex justify-between items-center py-8">
        <h1 className="text-4xl text-slate-50">SteamBB</h1>
        <ul className="flex [&_li]:ml-5 text-slate-50">
          <li>
            <form
              action="https://steamcommunity.com/openid/login"
              method="post"
            >
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
              <button type="submit">Log in Steam</button>
            </form>
          </li>
        </ul>
      </div>
    </header>
  );
}
