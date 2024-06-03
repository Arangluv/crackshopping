import type { Metadata } from "next";
import "@style/global.css";
import { Karla } from "next/font/google";
import Provider from "../../context/ThemeProvider";
import Header from "./(components)/header/Header";
import Footer from "./(components)/Footer";
import * as globalStyle from "../../styles/global.css";
import * as style from "@style/home/main.css";

export const metadata: Metadata = {
  title: "Shop Smart | CrackShopping",
  description:
    "Compare the prices of items on large online markets such as Amazon and eBay and purchase them at low prices.",
};
const karla = Karla({
  weight: ["400", "500"],
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
