import * as style from "@style/home/header.css";
import { Suspense } from "react";
import SearchResult from "./SearchResult";
import SearchResultFallBack from "./SearchResultFallback";
import SearchForm from "./SearchForm";
export default async function SearchBar({ locale }: { locale: string }) {
  // data가 없으면 빈 div를 return
  // 추후 loading 부분을 구현해야함

  return (
    <div className={style.search_bar_container}>
      <div className={style.content_wrapper}>
        {/* 검색을 하는 form */}
        <SearchForm locale={locale} />
        {/* 검색에 대한 결과값을 보여주는 div */}
      </div>
    </div>
  );
}
