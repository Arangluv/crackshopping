import * as style from "@style/home/main.css";
import Category from "./(components)/main/Categoty";
import MainTop from "./(components)/main/MainTop";
import TodayProduct from "./(components)/main/TodayProduct";
import TopDeal from "./(components)/main/TopDeal";
import AdsenseBanner from "./(components)/main/AdsenseBanner";
// import { getCategory } from "@src/app/api/api";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
