"use client";

import * as style from "@style/home/main.css";
import Image from "next/image";
import Link from "next/link";
import { PiWashingMachineThin } from "react-icons/pi";
import { getCategory } from "@src/app/api/route";
import { useQuery } from "@tanstack/react-query";

type Category = {
  category: {
    categoryId: string;
    categoryName: string;
  };
  categoryTreeNodeLevel: number;
};

type CategoryRootTree = {
  category: {
    categoryId: string;
    categoryName: string;
    categoryTreeNodeLevel: number;
  };
  childCategoryTreeNodes: CategoryChildTree[];
};

type CategoryChildTree = {
  category: {
    categoryId: string;
    categoryName: string;
    categoryTreeNodeLevel: number;
  };
  childCategoryTreeNodes: Category[];
};

export default function Category() {
  const { data: categoryData } = useQuery<CategoryRootTree[]>({
    queryKey: ["test"],
    queryFn: getCategory,
  });
  console.log("client에서 data");
  if (!categoryData) return <div />;
  console.log(
    "categoryData[0].childCategoryTreeNodes[0].childCategoryTreeNodes",
  );
  console.log(categoryData[0].childCategoryTreeNodes[0].childCategoryTreeNodes);
  const rootTree = categoryData.slice(0, 10);
  const levelOneTree = [];
  const levelTwoTree = [];
  return (
    <aside className={style.sidebar_container}>
      <ul className={style.list_wrapper}>
        {categoryData &&
          categoryData.slice(0, 10).map((rootCategory, idx) => {
            return (
              <li className={style.list_item_wrapper} key={idx}>
                <PiWashingMachineThin className={style.list_icon} />
                <span className={style.list_title}>
                  {rootCategory.category.categoryName}
                </span>
                <div className={style.sub_wrapper}>
                  <div className={style.sub_list_wrapper}>
                    <ul className={style.list_content_wrapper}>
                      {rootCategory.childCategoryTreeNodes
                        .slice(0, 6)
                        .map((childNode, idx) => {
                          return (
                            <>
                              <li key={idx}>
                                <Link
                                  href="#"
                                  className={style.sub_list_parent_title}
                                >
                                  {childNode.category.categoryName}
                                </Link>
                              </li>
                              {childNode.childCategoryTreeNodes
                                ?.slice(0, 8)
                                .map((level2Child, idx) => {
                                  return (
                                    <li key={idx}>
                                      <Link
                                        href="#"
                                        className={style.sub_list_child_title}
                                      >
                                        {level2Child.category.categoryName}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </>
                          );
                        })}
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
            );
          })}
      </ul>
    </aside>
  );
}
