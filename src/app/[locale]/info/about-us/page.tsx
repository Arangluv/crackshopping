import * as style from "@style/info/info.css";
import Image from "next/image";
import Shopping from "@src/app/assets/images/info_shopping.png";
import Link from "next/link";
export default function AboutUs() {
  return (
    <div className={style.about_us_container}>
      <div className={style.main_title_wrapper}>
        <h2 className={style.main_title}>
          <span className={style.main_title_text}>Shop Smart</span>
          <span className={`${style.main_title_text} ${style.text_accent}`}>
            Compare prices
          </span>
          <span className={style.main_title_text}>Get the best shopping</span>
        </h2>
      </div>
      <div className={style.about_us_image_wrapper}>
        <Image
          src={Shopping}
          fill={true}
          alt={"shopping cartoon image"}
          className={style.about_us_image}
        ></Image>
      </div>
      <div className={style.about_us_description_wrapper}>
        <p className={style.about_us_description_text}>
          Crackshopping compares the prices of products from large retailers
          such as Amazon and eBay and provides various information, including
          the best prices and reviews.
        </p>
      </div>
      <div className={style.user_action_wrapper}>
        <div className={style.btn_wrapper}>
          <Link href="../../" className={style.about_us_btn}>
            Get Start
          </Link>
        </div>
      </div>
    </div>
  );
}
