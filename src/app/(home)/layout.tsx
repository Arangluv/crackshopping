import type { Metadata } from "next";
import "../styles/global.css";
import Provider from "../context/ThemeProvider";

export const metadata: Metadata = {
  title: "Shop Smart | CrackShopping",
  description:
    "Compare the prices of items on large online markets such as Amazon and eBay and purchase them at low prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
