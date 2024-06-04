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
      <div className={style.recommended_keywords_wrapper}>
        {tempRecommendedLink.map((str, idx) => (
          <a className={style.recommended_keywords} href="#" key={idx}>
            {str}
          </a>
        ))}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
