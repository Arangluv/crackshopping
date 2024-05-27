import type { Metadata } from "next";
import "../styles/global.css";
import Provider from "../context/ThemeProvider";
import Header from "./(components)/header/Header";
import Footer from "./(components)/Footer";
import * as globalStyle from "../styles/global.css";
import * as style from "../styles/home/main.css";
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
      <body className={globalStyle.hidden_scroll}>
        <Provider>
          <main className={style.main_container}>
            <Header />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
