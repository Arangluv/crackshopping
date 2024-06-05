import * as style from "@style/search/main.css";
import SearchTop from "./(components)/SearchTop";
import SearchSideBar from "./(components)/SearchSideBar";

export default function SearchPage() {
  return (
    <section className={style.search_main_container}>
      <SearchTop />
      <SearchSideBar />
      <div className={style.grid_item}></div>
    </section>
  );
}
