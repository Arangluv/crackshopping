"use client";

import * as style from "@style/home/main.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function TopDeal() {
  const [selectedIndex, setSelectedIdx] = useState(0);
  const tempProductArr = [0, 1, 2];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIdx(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const handleClickPrev = () => {
    emblaApi.scrollPrev();
    setSelectedIdx(emblaApi.selectedScrollSnap());
  };

  const handleClickNext = () => {
    emblaApi.scrollNext();
    setSelectedIdx(emblaApi.selectedScrollSnap());
  };
  return (
    <section className={style.top_deal_container}>
      <em className={style.sub_theme_title}>
        <span className={style.sub_title_emphasis}>Top Deal</span>
      </em>
      <div className={style.product_item_wrapper} ref={emblaRef}>
        <div className={style.scroll_wrapper}>
          <ul className={style.slider_wrapper}>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_1.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_2.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_3.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_4.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_5.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
          </ul>
          <ul className={style.slider_wrapper}>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_1.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_2.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_3.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_4.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_5.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
          </ul>
          <ul className={style.slider_wrapper}>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_1.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_2.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_3.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_4.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
            <li className={style.slider_item_wrapper}>
              <a
                href="#product-detail-link"
                className={style.product_detail_link}
              >
                <div className={style.slider_item_image_wrapper}>
                  <Image
                    src="/assets/images/today-products/today-product_5.webp"
                    width={100}
                    height={100}
                    alt="today's product image"
                    className={style.product_image}
                  />
                </div>
                <div className={style.product_info_wrapper}>
                  <span className={style.product_title}>
                    Nikon D D80 10.2MP Digital SLR Camera - Black (Plus 3
                    Lenses, Bag, Chargers)
                  </span>
                  <span className={style.product_price}>$130.00</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.progress_wrapper}>
        <FaAngleLeft onClick={handleClickPrev} className={style.prev_icon} />
        {tempProductArr.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`${style.progress_item} ${idx === selectedIndex ? style.progress_active : ""}`}
            />
          );
        })}
        <FaAngleRight onClick={handleClickNext} className={style.next_icon} />
      </div>
    </section>
  );
}
