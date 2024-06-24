import * as style from "@style/search/search-sidebar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import SidebarDropdownItem from "./SidebarDropdownItem";

const lessThen8lengthArr = [
  "Wet Ones",
  "Cottonelle",
  "DUDE Wipes",
  "The Honest Company",
  "HUGGIESHUGGIES",
  "Pampers",
];

function SideBarListItem() {
  return (
    <div className={style.category_item_wrapper}>
      <h5 className={style.category_title}>Brands</h5>
      <IoMdArrowDropdown className={style.category_icon} />
      {/* <ul className={`${style.list_wrapper} ${style.mobile_only_list_wrapper}`}> 드랍다운 시 클래스를 추가하면 된다 */}
      <ul className={`${style.list_wrapper}`}>
        {lessThen8lengthArr.map((str, idx) => {
          return (
            <li className={style.list_item} key={`${idx}_list`}>
              {str}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function SideBarCheckListItem() {
  return (
    <div className={style.category_item_wrapper}>
      <h5 className={style.category_title}>Brands</h5>
      <IoMdArrowDropdown className={style.category_icon} />
      <ul className={style.list_wrapper}>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="temp">Wet Ones</label>
        </li>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="temp">Cottonelle</label>
        </li>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="temp">DUDE Wipes</label>
        </li>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="temp">The Honest Company</label>
        </li>
      </ul>
    </div>
  );
}

export default function SearchSideBar() {
  return (
    <aside className={style.sidebar_container}>
      <SideBarListItem />
      <SideBarCheckListItem />
      <SidebarDropdownItem />
    </aside>
  );
}
