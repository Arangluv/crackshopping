"use client";

import * as style from "@style/home/main.css";
import Image from "next/image";
import Link from "next/link";
import { PiWashingMachineThin } from "react-icons/pi";
import { getCategory } from "@src/app/api/route";
import { useQuery } from "@tanstack/react-query";

export default function Category() {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: getCategory,
  });
  console.log(data);
  return (
    <aside className={style.sidebar_container}>
      <ul className={style.list_wrapper}>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Appliances</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
        <li className={style.list_item_wrapper}>
          <PiWashingMachineThin className={style.list_icon} />
          <span className={style.list_title}>Some Category</span>
          <div className={style.sub_wrapper}>
            <div className={style.sub_list_wrapper}>
              <ul className={style.list_content_wrapper}>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_parent_title}
                  >
                    Refrigerators, Freezers & Ice Makers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Freezers
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://www.example.com"
                    className={style.sub_list_child_title}
                  >
                    Compact Refrigerators
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_1.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
            <div className={style.sub_list_image_wrapper}>
              <a href="http://www.example.com">
                <Image
                  src="/assets/images/category_product_test_2.jpg"
                  width={100}
                  height={100}
                  alt="Recommended products by category"
                  className={style.sub_list_image}
                />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
}
