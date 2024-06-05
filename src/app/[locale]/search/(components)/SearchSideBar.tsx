import SidebarDropdownItem from "./SidebarDropdownItem";
import * as style from "@style/search/search-sidebar.css";

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
      <ul className={style.list_wrapper}>
        {lessThen8lengthArr.map((str, idx) => {
          return (
            <li className={style.list_item} key={idx}>
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
      <ul className={style.list_wrapper}>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="">Wet Ones</label>
        </li>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="">Cottonelle</label>
        </li>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="">DUDE Wipes</label>
        </li>
        <li className={style.list_item}>
          <input className={style.list_checkbox} type="checkbox" />
          <label htmlFor="">The Honest Company</label>
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
