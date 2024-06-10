"use client";

import * as style from "@style/home/main.css";
import Category from "./(components)/main/Categoty";
import MainTop from "./(components)/main/MainTop";
import TodayProduct from "./(components)/main/TodayProduct";
import TopDeal from "./(components)/main/TopDeal";
import AdsenseBanner from "./(components)/main/AdsenseBanner";
// import Overlay from "./(components)/main/Overlay";

export default function Home() {
  // const [isClose, setIsClose] = useState(false);
  return (
    <main className={style.main_content_container}>
      <Category />
      <MainTop />
      <TodayProduct />
      <TopDeal />
      <AdsenseBanner />
      {/* {!isClose ? <Overlay setIsClose={setIsClose} /> : null} */}
    </main>
  );
}
