import "./global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
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
        <div
          id="wrap"
          className="h-screen bg-gradient-to-r from-sky-900 to-sky-950"
        >
          <Navigation />
          <TanstackProvider>{children}</TanstackProvider>
        </div>
      </body>
    </html>
  );
}
