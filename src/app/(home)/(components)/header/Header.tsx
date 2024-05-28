import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import * as style from "../../../styles/home/header.css";
import logo from "../../../../../public/assets/logo/logo.png";
import Discount from "../../../../../public/assets/icons/discount.svg";
import Product from "../../../../../public/assets/icons/product.svg";
import Category from "../../../../../public/assets/icons/category.svg";

function Header() {
  return (
    <header className={style.header_container}>
      <div className={style.logo_wrapper}>
        <a href="#">
          <Image
            src={logo}
            alt="logo image"
            width={270}
            height={100}
            className={style.logo_image}
          />
        </a>
      </div>
      <SearchBar />
      <div className={style.menu_wrapper}>
        <AiOutlineMenu className={style.menu_icon} />
      </div>
      <div className={style.product_nav}>
        <a href="#" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Category className={style.nav_icon} />
            <span className={style.nav_text}>Top Categories</span>
          </div>
        </a>
        <a href="#" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Product className={style.nav_icon} />
            <span className={style.nav_text}>Today&apos; Products</span>
          </div>
        </a>
        <a href="#" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Discount className={style.nav_icon} />
            <span className={style.nav_text}>Top Deals</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
