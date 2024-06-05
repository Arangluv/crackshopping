import * as style from "@style/search/search-top.css";

export default function SearchTop() {
  const tempRecommendedLink = [
    "wet wipes fluchable",
    "wet wipes for adults",
    "wet wipes baby",
    "wet wipes dispenser",
  ];
  return (
    <div className={style.search_top_container}>
      <div className={style.flex_box_align_center}>
        {tempRecommendedLink.map((str, idx) => (
          <a
            className={style.recommended_keywords}
            href="http://www.example.com"
            key={`${idx}_recommanded`}
          >
            {str}
          </a>
        ))}
      </div>
      <div className={style.flex_box_align_center}>
        <span className={style.result_quantity_text}>
          results for{" "}
          <span className={style.text_accent}>&quot;wet wipes&quot;</span>
        </span>
      </div>
      <ul className={style.sorted_wrapper}>
        <li className={`${style.sorted_item} ${style.text_accent}`}>Best</li>
        <li className={style.sorted_item}>Price High</li>
        <li className={style.sorted_item}>Price Low</li>
        <li className={style.sorted_item}>Customer review</li>
      </ul>
    </div>
  );
}
