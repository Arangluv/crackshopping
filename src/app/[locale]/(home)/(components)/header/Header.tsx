import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import * as style from "@style/home/header.css";
import Discount from "@/public/assets/icons/discount.svg";
import Product from "@/public/assets/icons/product.svg";
import Category from "@/public/assets/icons/category.svg";
import initTranslations from "../../../../utills/localization/translation";
import SearchBar from "./SearchBar";
import EbayAuthToken from "ebay-oauth-nodejs-client";
import axios from "axios";
import { getCategory } from "@src/app/api/api";

interface IProps {
  locale: string;
}

export default async function Header({ locale }: IProps) {
  const { t } = await initTranslations(locale, "home");
  console.log("process.env.NODE_ENV"); // development, production
  console.log(process.env.NODE_ENV);
  const data = await getCategory();
  console.log(data);
  return (
    <header className={style.header_container}>
      <div className={style.logo_wrapper}>
        <a href="/">
          <Image
            src="/assets/logo/logo.png"
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
        <a href="http://www.example.com" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Category className={style.nav_icon} />
            <span className={style.nav_text}>{t("top-category")}</span>
          </div>
        </a>
        <a href="http://www.example.com" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Product className={style.nav_icon} />
            <span className={style.nav_text}>{t("today-product")}</span>
          </div>
        </a>
        <a href="http://www.example.com" className={style.nav_link}>
          <div className={style.nav_list_wrapper}>
            <Discount className={style.nav_icon} />
            <span className={style.nav_text}>{t("top-deal")}</span>
          </div>
        </a>
      </div>
      <span>{process.env.TEST}</span>
    </header>
  );
}
