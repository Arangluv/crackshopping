"use client";

import * as style from "@style/home/header.css";

export default function ErrorFallback() {
  return (
    <div role="alert" className={style.search_result_wrapper}>
      <p className={style.error_text}>
        There was a problem retrieving recommended words.
      </p>
      <p className={style.error_text}>Please, Try again</p>
    </div>
  );
}
