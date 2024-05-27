import Image from "next/image";
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
          <div className={style.nav_list_wrapper}>
            <Category className={style.nav_icon} />
            <span className={style.nav_text}>Top Categories</span>
          </div>
        </a>
        <a href="#">
          <div className={style.nav_list_wrapper}>
            <Product className={style.nav_icon} />
            <span className={style.nav_text}>Today's Products</span>
          </div>
        </a>
        <a href="#">
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
