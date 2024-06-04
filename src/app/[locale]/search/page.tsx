import * as style from "@style/search/main.css";
import SearchTop from "./(components)/SearchTop";

export default function SearchPage() {
  return (
    <section className={style.search_main_container}>
      <SearchTop></SearchTop>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
    </section>
  );
}
