import type { Metadata, Viewport } from "next";
import "@style/global.css";
import { Karla } from "next/font/google";
import * as style from "@style/home/main.css";
import Provider from "../context/ThemeProvider";
import Header from "./(home)/(components)/header/Header";
import Footer from "./(home)/(components)/Footer";
import * as globalStyle from "../styles/global.css";

export const metadata: Metadata = {
  title: "Shop Smart | CrackShopping",
  description:
    "Compare the prices of items on large online markets such as Amazon and eBay and purchase them at low prices.",
};
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};
const karla = Karla({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
        <meta
          name="impact-site-verification"
          content="4bd71224-04e1-474f-bd04-545f334001b3"
        />
      </head>
      <body className={`${globalStyle.hidden_scroll} ${karla.className}`}>
        <Provider>
          <div className={style.main_container}>
            <Header locale={locale} />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
