import * as style from "@style/search/main.css";
import SearchTop from "./(components)/SearchTop";
import SearchSideBar from "./(components)/SearchSideBar";
import SearchProductMain from "./(components)/SearchProductMain";

export default function SearchPage() {
  return (
    <section className={style.search_main_container}>
      <SearchTop />
      <SearchSideBar />
      <SearchProductMain />
    </section>
  );
}
