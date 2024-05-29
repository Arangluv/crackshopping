import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import * as style from "../../../../styles/home/header.css";
import Discount from "@/public/assets/icons/discount.svg";
import Product from "@/public/assets/icons/product.svg";
import Category from "@/public/assets/icons/category.svg";
import initTranslations from "../../../../utills/localization/translation";

interface IProps {
  locale: string;
}
export default async function Header({ locale }: IProps) {
  const { t } = await initTranslations(locale, "home");
  return (
    <header className={style.header_container}>
      <div className={style.logo_wrapper}>
        <a href="#">
          <Image
            src={"/assets/logo/logo.png"}
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
            <span className={style.nav_text}>{t("top-category")}</span>
          </div>
        </a>
        <a href="#" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Product className={style.nav_icon} />
            <span className={style.nav_text}>{t("today-product")}</span>
          </div>
        </a>
        <a href="#" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Discount className={style.nav_icon} />
            <span className={style.nav_text}>{t("top-deal")}</span>
          </div>
        </a>
      </div>
    </header>
  );
}
