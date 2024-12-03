import "./global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import { TanstackProvider } from "../components/proviers/tanstack-provider";

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
    <html lang="en">
      <body>
        <Navigation />
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
