import * as style from "@style/search/main.css";
import Image from "next/image";
import WetWipes_1 from "@src/app/assets/images/wet_wipes_1.jpg";
import WetWipes_2 from "@src/app/assets/images/wet_wipes_2.jpg";
import WetWipes_3 from "@src/app/assets/images/wet_wipes_3.jpg";
import WetWipes_4 from "@src/app/assets/images/wet_wipes_3.jpg";
import WetWipes_5 from "@src/app/assets/images/wet_wipes_3.jpg";
import AmazonLogo from "@src/app/assets/images/amazon_logo.png";
import EbayLogo from "@src/app/assets/images/ebay_log.png";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function SearchProductMain() {
  let mockData = [
    {
      title:
        "Amazon Elements Baby Wipes, Sensitive, 810 Count, Flip-Top Packs, Pack of 9",
      img: WetWipes_1,
      price: "21.56",
      features: "50K+ bought in past month",
      offers: "",
      reviewCount: "34,425",
    },
    {
      title:
        "DUDE Wipes - Flushable Wipes Travel Pack - 6 Pack, 108 Wipes - Extra Large Unscented Wet Wipes with Vitamin E & Aloe - Septic and Sewer Safe Butt Wipes For Adults",
      img: WetWipes_2,
      price: "23.96",
      features: "2K+ bought in past month",
      offers:
        "FREE delivery Fri, Jun 14 to Republic of Korea on $49 of eligible items",
      reviewCount: "489",
    },
    {
      title:
        "WipeEssentials Hand Sanitizer Wipes, Hand Wipes for Adults and Kids - 360 wipes - 12 Packs of 30ct Hand Sanitizing Wipes, Travel Essentials",
      img: WetWipes_3,
      price: "33.99",
      features: "2K+ bought in past month",
      offers:
        "FREE delivery Fri, Jun 14 to Republic of Korea on $49 of eligible items",
      reviewCount: "1,219",
    },
    {
      title:
        "Cottonelle Fresh Feel Flushable Wet Wipes, Adult Wet Wipes, 8 Flip-Top Packs, 42 Wipes Per Pack (336 Total Wipes), Packaging May Vary",
      img: WetWipes_4,
      price: "19.45",
      features: "1K+ bought in past month",
      offers: "Delivery Fri, Jun 14 to Republic of Korea",
      reviewCount: "129,582",
    },
    {
      title:
        "WaterWipes Plastic-Free Original Baby Wipes, 99.9% Water Based Wipes, Unscented & Hypoallergenic for Sensitive Skin, 60 Count (Pack of 12), Packaging May Vary",
      img: WetWipes_5,
      price: "14.45",
      features: "12K+ bought in past month",
      offers: "Delivery Fri, Jun 14 to Republic of Korea",
      reviewCount: "123",
    },
  ];
  return (
    <ul className={style.product_main_container}>
      {mockData.map((product, idx) => {
        return (
          <li key={idx} className={style.product_list_wrapper}>
            <a href="#" className={style.product_link}>
              <dl className={style.product_detail_wrapper}>
                <dt className={style.product_image_wrapper}>
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt="user search product image"
                    className={style.product_image}
                  ></Image>
                </dt>
                <dd className={style.product_title_wrapper}>
                  <span className={style.product_title_text}>
                    {product.title}
                  </span>
                </dd>
                <dd className={style.product_price_wrapper}>
                  <div className={style.price_info_wrapper}>
                    <span className={style.price_text}>{product.price}$</span>
                    <span className={style.price_additional_info}>
                      ($0.14/Count)
                    </span>
                  </div>
                  <div className={style.supported_retailer_wrapper}>
                    <div className={style.logo_wrapper}>
                      {idx % 2 === 0 ? (
                        <Image
                          src={AmazonLogo}
                          width={100}
                          height={40}
                          alt="product prodiver retailer logo"
                          className={style.retailer_logo}
                        ></Image>
                      ) : (
                        <Image
                          src={EbayLogo}
                          width={100}
                          height={40}
                          alt="product prodiver retailer logo"
                          className={style.retailer_logo}
                        ></Image>
                      )}
                    </div>
                  </div>
                </dd>
                <dd className={style.product_additional_info_wrapper}>
                  <div className={style.offer_and_feature_wrapper}>
                    <span className={style.product_offers_text}>
                      {product.features}
                    </span>
                    <span className={style.featured_offers_text}>
                      {product.offers === ""
                        ? "No featured offers available"
                        : product.offers}
                    </span>
                  </div>
                  <div className={style.info_sub_wrapper}>
                    <FaStar className={style.review_icon} />
                    <FaStar className={style.review_icon} />
                    <FaStar className={style.review_icon} />
                    <FaStar className={style.review_icon} />
                    <FaStarHalfAlt className={style.review_icon} />
                    <span className={style.review_count_text}>
                      ({product.reviewCount})
                    </span>
                  </div>
                </dd>
              </dl>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
