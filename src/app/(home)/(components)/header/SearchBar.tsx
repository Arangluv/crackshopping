import * as style from "../../../styles/home/header.css";

export default function SearchBar() {
  return (
    <div className={style.search_bar_container}>
      <form className={style.search_bar_form}>
        <label className={style.search_label} htmlFor="product-input">
          <input
            className={style.search_input}
            type="text"
            id="product-input"
          />
          <span className={style.icon_wrapper}>icon</span>
        </label>
      </form>
      <div className={style.search_result_wrapper}>
        <span>result를 보여주는 창</span>
      </div>
    </div>
  );
}
