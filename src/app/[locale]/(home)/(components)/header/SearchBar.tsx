import { CiSearch } from "react-icons/ci";
import * as style from "../../../../styles/home/header.css";

export default function SearchBar() {
  return (
    <div className={style.search_bar_container}>
      <div className={style.content_wrapper}>
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
        <div className={style.search_result_wrapper}>
          <div className={style.result_text_wrapper}>
            <a href="#" className={style.result_link}>
              <span className={style.text_accent}>pot</span>ato
            </a>
          </div>
          <div className={`${style.result_text_wrapper} last-result`}>
            <a href="#" className={style.result_link}>
              <span className={style.text_accent}>pot</span>ato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
