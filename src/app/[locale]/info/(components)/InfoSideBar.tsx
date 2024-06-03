"use client";

import * as style from "@style/info/info.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function InfoSideBar() {
  const url = usePathname().split("/");
  const currentPageUrlName = url[url.length - 1];
  console.log("currentPageUrlName");
  console.log(currentPageUrlName);
  return (
    <ul className={style.sidebar_container}>
      <li className={style.list_item}>
        <Link className={style.link_text} href="#">
          About Us
        </Link>
      </li>
      <li className={style.list_item}>
        <Link className={style.link_text} href="#">
          Contact Us
        </Link>
      </li>
      <li className={style.list_item}>
        <Link className={style.link_text} href="#">
          Sitemap
        </Link>
      </li>
      <li className={style.list_item}>
        <Link className={style.link_text} href="#">
          Terms of Use
        </Link>
      </li>
    </ul>
  );
}
