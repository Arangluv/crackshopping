import * as style from "@style/home/main.css";
import Image from "next/image";
import Link from "next/link";
export default function Category() {
  return (
    <aside className={style.sidebar_container}>
      <ul className={style.list_wrapper}>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Appliances</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link href="#" className={style.sub_list_parent_title}>
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={style.sub_list_child_title}>
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="#">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                ></Image>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
}
