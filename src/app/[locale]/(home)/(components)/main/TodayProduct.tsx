import * as style from "@style/home/main.css";

export default function TodayProduct() {
  return (
    <section className={style.today_product_container}>
      <h2 className={style.sub_theme_title}>Today's Products</h2>
      <div className={style.product_item_wrapper}>Carousel Part</div>
    </section>
  );
}
