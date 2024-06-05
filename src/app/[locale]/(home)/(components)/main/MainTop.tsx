import * as style from "@style/home/main.css";

export default function MainTop() {
  return (
    <section className={style.main_top_container}>
      <div className={style.site_banner_wrapper}>
        <span>Website Banner (Product marketing space)</span>
      </div>
      <div className={style.adsense_wrapper}>
        <span>Adsense Part</span>
      </div>
      <div className={style.promotion_image_wrapper}>
        <span>Promotion Image Part</span>
      </div>
      <div className={style.supportor_wrapper}>
        <span>A space to introduce the retail stores we support</span>
      </div>
    </section>
  );
}
