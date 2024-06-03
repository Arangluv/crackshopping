"use client";

import * as style from "@style/info/info.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
type PageUrlName = "about-us" | "contacts" | "sitemap" | "terms";

export default function InfoSideBar() {
  const url = usePathname();
  const rootUrl = url.split("/").slice(0, 3).join("/"); // /[locale]/info
  // about-us, contacts, sitemap, terms
  const currentPageUrlName: string = url.split("/").at(-1) as PageUrlName;

  return (
    <ul className={style.sidebar_container}>
      <li className={style.list_item}>
        <Link
          className={`${style.link_text} ${currentPageUrlName === "about-us" ? style.text_active : ""}`}
          href={`${rootUrl}/about-us`}
        >
          About Us
        </Link>
      </li>
      <li className={style.list_item}>
        <Link
          className={`${style.link_text} ${currentPageUrlName === "contacts" ? style.text_active : ""}`}
          href={`${rootUrl}/contacts`}
        >
          Contact Us
        </Link>
      </li>
      <li className={style.list_item}>
        <Link
          className={`${style.link_text} ${currentPageUrlName === "sitemap" ? style.text_active : ""}`}
          href={`${rootUrl}/sitemap`}
        >
          Sitemap
        </Link>
      </li>
      <li className={style.list_item}>
        <Link
          className={`${style.link_text} ${currentPageUrlName === "terms" ? style.text_active : ""}`}
          href={`${rootUrl}/terms`}
        >
          Terms of Use
        </Link>
      </li>
    </ul>
  );
}
