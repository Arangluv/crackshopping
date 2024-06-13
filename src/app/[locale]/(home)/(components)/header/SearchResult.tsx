import * as style from "@style/home/header.css";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

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
const testApi = async () => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  return null;
};
export default async function SearchResult() {
  const KEYWORD = "iphone";
  const {
    data: searchData,
    error,
    status,
  } = useSuspenseQuery<SearchItem>({
    queryKey: ["search-item"],
    queryFn: testApi,
  });
  // console.log(searchData);

  if (!searchData) return <div></div>;
  return (
    <div className={style.search_result_wrapper}>
      {/* <div className={`${style.result_text_wrapper} last-result`}>
    <a href="http://www.example.com" className={style.result_link}>
      <span className={style.text_accent}>pot</span>ato
    </a>
  </div> */}
      {searchData.itemSummaries.map((info, idx) => {
        return (
          <div key={idx} className={`${style.result_text_wrapper} last-result`}>
            <ResultItem text={info.title} searchKeyword={KEYWORD} />
          </div>
        );
      })}
    </div>
  );
}
