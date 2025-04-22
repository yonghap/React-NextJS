import "@/styles/reset.css";
import * as common from "@/styles/common.css";

import { Metadata } from "next";
import Navigation from "@/components/navigation";
import { TanstackProvider } from "../components/providers/tanstack-provider";
import * as mainCSS from "@/styles/main.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "React & Next Framework",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className={common.wrap}>
          <div>
            <TanstackProvider>{children}</TanstackProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
