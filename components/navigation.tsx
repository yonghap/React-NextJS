"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <header>
      <div className="max-w-5xl m-auto flex justify-between items-center py-8">
        <h1 className="text-4xl">Treveller</h1>
        <ul className="flex [&_li]:ml-5">
          <li>
            <a href="#">지역별</a>
          </li>
          <li>
            <a href="#">인기별</a>
          </li>
          <li>
            <a href="#">내가 가본 곳</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
