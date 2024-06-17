"use client";

import * as style from "@style/home/header.css";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecommandedKeyword } from "@src/app/api/recommanded-keyword/route";
import { useRecoilValue } from "recoil";
import { localeState } from "@src/app/atom/global-atom";

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

// Suspense 동작확인을 위해 작성

const testApi = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return null;
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

export default function SearchResult({ keyword }: { keyword: string }) {
  const locale = useRecoilValue(localeState);

  const {
    data: searchData,
    error,
    status,
  } = useSuspenseQuery<SearchItem>({
    queryKey: ["search-item", keyword],
    queryFn: () =>
      getRecommandedKeyword({
        keyword,
        locale,
      }),
  });

  if (!searchData || !searchData?.itemSummaries?.length)
    return (
      <div className={style.search_result_wrapper}>
        <span className={style.no_search_result_text}>
          There are no recommended keywords.
        </span>
      </div>
    );

  return (
    <div className={style.search_result_wrapper}>
      {searchData.itemSummaries.map((info, idx) => {
        return (
          <div
            key={idx}
            className={`${style.result_text_wrapper} ${idx === searchData.itemSummaries.length - 1 ? "last-result" : ""}`}
          >
            <ResultItem text={info.title} searchKeyword={keyword} />
          </div>
        );
      })}
    </div>
  );
}
