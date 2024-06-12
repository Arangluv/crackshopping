"use client";

import { CiSearch } from "react-icons/ci";
import * as style from "@style/home/header.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
type ItemSummary = {
  itemId: string;
  title: string;
  itemAffiliateWebUrl: string;
  image: {
    imageUrl: string;
  };
  price: {
    currency: string;
    value: string;
  };
};
type SearchItem = {
  total: number;
  itemSummaries: ItemSummary[];
};

const getSearchItem = async () => {
  const response = await axios({
    method: "GET",
    url: "/api/search",
  });
  return response.data.searchData;
};

function ResultItem({
  text,
  searchKeyword,
}: {
  text: string;
  searchKeyword: string;
}) {
  const [preTitle, nextTitle] = text.split(new RegExp(searchKeyword, "gi"));
  return (
    <a href="#" className={style.result_link}>
      {preTitle}
      <span className={style.text_accent}>{searchKeyword}</span>
      {nextTitle}
    </a>
  );
}

export default function SearchBar() {
  const KEYWORD = "iphone";
  const {
    data: searchData,
    error,
    status,
  } = useQuery<SearchItem>({
    queryKey: ["search-item"],
    queryFn: getSearchItem,
  });
  console.log(searchData);

  // data가 없으면 빈 div를 return
  // 추후 loading 부분을 구현해야함
  if (!searchData) return <div></div>;

  return (
    <div className={style.search_bar_container}>
      <div className={style.content_wrapper}>
        {/* 검색을 하는 form */}
        <form className={style.search_bar_form}>
          <fieldset className={style.search_field}>
            <legend className={style.hidden}>product search</legend>
            <label className={style.search_label} htmlFor="product-input">
              <input
                className={style.search_input}
                type="text"
                id="product-input"
              />
              <span className={style.hidden}>Search</span>
              <span className={style.icon_wrapper}>
                <CiSearch className={style.icon} />
              </span>
            </label>
          </fieldset>
        </form>
        {/* 검색에 대한 결과값을 보여주는 div */}
        <div className={style.search_result_wrapper}>
          {/* <div className={`${style.result_text_wrapper} last-result`}>
            <a href="http://www.example.com" className={style.result_link}>
              <span className={style.text_accent}>pot</span>ato
            </a>
          </div> */}
          {searchData.itemSummaries.map((info, idx) => {
            return (
              <div
                key={idx}
                className={`${style.result_text_wrapper} last-result`}
              >
                <ResultItem text={info.title} searchKeyword={KEYWORD} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
