"use client";

import * as style from "@style/search/search-sidebar.css";
import { useState } from "react";

export default function SidebarDropdownItem() {
  const [isClick, setIsClick] = useState(false);
  const moreThen8lengthArr = [
    "Wet Ones", // 0
    "Cottonelle", // 1
    "DUDE Wipes", // 2
    "The Honest Company", // 3
    "HUGGIESHUGGIES", // 4
    "Pampers", // 5
    "Nice 'N Clean", // 6
    "Charmin", // 7
    "goodwipes", // 8
    "Medline", // 9
    "Vagisil",
    "Lysol",
    "McKesson",
    "Rael",
    "Purell",
  ];
  return (
    <div className={style.category_item_wrapper}>
      <h5 className={style.category_title}>Brands</h5>
      <ul className={style.list_dropdown_wrapper}>
        {isClick
          ? moreThen8lengthArr.map((str, idx) => {
              return (
                <li className={style.list_item} key={`${idx}_list`}>
                  {str}
                </li>
              );
            })
          : moreThen8lengthArr.slice(0, 8).map((str, idx) => {
              return (
                <li className={style.list_item} key={`${idx}_list`}>
                  {str}
                </li>
              );
            })}
      </ul>
      <div className={style.see_more_wrapper}>
        <button
          onClick={() => setIsClick(pre => !pre)}
          className={style.see_more_btn}
          type="button"
        >
          + See more
        </button>
      </div>
    </div>
  );
}
