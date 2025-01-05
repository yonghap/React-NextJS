import "@/styles/reset.css";
import { Metadata } from "next";
import Navigation from "@/components/navigation";
import { TanstackProvider } from "../components/providers/tanstack-provider";

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
        <div id="wrap">
          <TanstackProvider>
            <Navigation />
            {children}
          </TanstackProvider>
        </div>
      </body>
    </html>
  );
}
