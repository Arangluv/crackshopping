"use client";

import * as style from "@style/home/main.css";
import EmblaOptionType from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
export default function TodayProduct() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <section className={style.today_product_container}>
      <h2 className={style.sub_theme_title}>Today's Products</h2>
      <div className={style.product_item_wrapper} ref={emblaRef}>
        <div className={style.scroll_wrapper}>
          <div className={style.slider_wrapper}>Slider 1</div>
          <div className={style.slider_wrapper}>Slider 2</div>
          <div className={style.slider_wrapper}>Slider 3</div>
        </div>
      </div>
    </section>
  );
}
