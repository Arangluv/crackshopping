import * as style from "@style/home/header.css";
import SearchForm from "./SearchForm";

export default async function SearchBar({ locale }: { locale: string }) {
  return (
    <div className={style.search_bar_container}>
      <div className={style.content_wrapper}>
        <SearchForm locale={locale} />
      </div>
    </div>
  );
}
