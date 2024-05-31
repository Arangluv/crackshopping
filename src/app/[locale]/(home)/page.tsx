import * as style from "@style/home/main.css";
import Category from "./(components)/main/Categoty";
import MainTop from "./(components)/main/MainTop";
import TodayProduct from "./(components)/main/TodayProduct";
import TopDeal from "./(components)/main/TopDeal";
import AdsenseBanner from "./(components)/main/AdsenseBanner";

export default function Home() {
  return (
    <main className={style.main_content_container}>
      <Category />
      <MainTop />
      <TodayProduct />
      <TopDeal />
      <AdsenseBanner />
    </main>
  );
}
