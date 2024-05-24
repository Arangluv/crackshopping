import Image from "next/image";
import SearchBar from "./SearchBar";
import * as style from "../../../styles/home/header.css";
import logo from "../../../../../public/assets/logo/logo.png";
import Discount from "../../../../../public/assets/icons/discount.svg";
function Header() {
  return (
    <header className={style.header_container}>
      <div className={style.logo_wrapper}>
        <Image
          src={logo}
          alt="logo image"
          width={270}
          height={100}
          className={style.logo_image}
        />
      </div>
      <SearchBar />
      <div className={style.product_nav}>
        <a href="#">
          <div className={style.nav_list_wrapper}></div>
        </a>
        <a href="#">
          <div className={style.nav_list_wrapper}>
            <Discount />
          </div>
        </a>
        <a href="#">
          <div className={style.nav_list_wrapper}></div>
        </a>
      </div>
    </header>
  );
}

export default Header;
