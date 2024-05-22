import * as style from "../../styles/home/header.css";
function Header() {
  return (
    <div className={style.header_container}>
      <div className={style.logo_wrapper}></div>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
    </div>
  );
}

export default Header;
