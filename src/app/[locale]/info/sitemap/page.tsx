import * as style from "@style/info/info.css";
import Link from "next/link";

function CategoryItem1() {
  return (
    <div className={style.root_category_wrapper}>
      <h3 className={style.root_category_title}>
        <Link href="#">Appliances</Link>
      </h3>
      <div className={style.sub_category_flex_wrapper}>
        <dl className={style.sub_category_wrapper}>
          <dt className={style.sub_category_title}>
            <Link href="#">Laundry Appliances</Link>
          </dt>
          <dd className={style.children_title}>
            <Link href="#">Washers & Dryers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Irons & Garment Steamers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Trouser Pressers</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
}
function CategoryItem2() {
  return (
    <div className={style.root_category_wrapper}>
      <h3 className={style.root_category_title}>
        <Link href="#">Appliances</Link>
      </h3>
      <div className={style.sub_category_flex_wrapper}>
        <dl className={style.sub_category_wrapper}>
          <dt className={style.sub_category_title}>
            <Link href="#">Laundry Appliances</Link>
          </dt>
          <dd className={style.children_title}>
            <Link href="#">Washers & Dryers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Irons & Garment Steamers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Trouser Pressers</Link>
          </dd>
        </dl>
        <dl className={style.sub_category_wrapper}>
          <dt className={style.sub_category_title}>
            <Link href="#">Laundry Appliances</Link>
          </dt>
          <dd className={style.children_title}>
            <Link href="#">Washers & Dryers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Irons & Garment Steamers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Trouser Pressers</Link>
          </dd>
        </dl>
        <dl className={style.sub_category_wrapper}>
          <dt className={style.sub_category_title}>
            <Link href="#">Laundry Appliances</Link>
          </dt>
          <dd className={style.children_title}>
            <Link href="#">Washers & Dryers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Irons & Garment Steamers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Trouser Pressers</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
}
function CategoryItem3() {
  return (
    <div className={style.root_category_wrapper}>
      <h3 className={style.root_category_title}>
        <Link href="#">Appliances</Link>
      </h3>
      <div className={style.sub_category_flex_wrapper}>
        <dl className={style.sub_category_wrapper}>
          <dt className={style.sub_category_title}>
            <Link href="#">Laundry Appliances</Link>
          </dt>
          <dd className={style.children_title}>
            <Link href="#">Washers & Dryers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Irons & Garment Steamers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Trouser Pressers</Link>
          </dd>
        </dl>
        <dl className={style.sub_category_wrapper}>
          <dt className={style.sub_category_title}>
            <Link href="#">Laundry Appliances</Link>
          </dt>
          <dd className={style.children_title}>
            <Link href="#">Washers & Dryers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Irons & Garment Steamers</Link>
          </dd>
          <dd className={style.children_title}>
            <Link href="#">Trouser Pressers</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default function Sitemap() {
  return (
    <div className={style.sitemap_container}>
      <div className={style.grid_item}>
        <div className={style.sitemap_sub_wrapper}>
          <CategoryItem3 />
          <CategoryItem2 />
          <CategoryItem1 />
          <CategoryItem1 />
        </div>
      </div>
      <div className={style.grid_item}>
        <div className={style.sitemap_sub_wrapper}>
          <CategoryItem1 />
          <CategoryItem2 />
          <CategoryItem3 />
          <CategoryItem1 />
        </div>
      </div>
      <div className={style.grid_item}>
        <div className={style.sitemap_sub_wrapper}>
          <CategoryItem1 />
          <CategoryItem2 />
          <CategoryItem3 />
          <CategoryItem1 />
        </div>
      </div>
    </div>
  );
}
