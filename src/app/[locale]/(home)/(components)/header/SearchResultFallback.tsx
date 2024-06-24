import * as style from "@style/home/header.css";

export default function SearchResultFallBack() {
  return (
    <div className={style.search_result_fallback_warpper}>
      <div className={style.result_text_fallback} />
      <div className={style.result_text_fallback} />
      <div className={style.result_text_fallback} />
      <div className={style.result_text_fallback} />
    </div>
  );
}
