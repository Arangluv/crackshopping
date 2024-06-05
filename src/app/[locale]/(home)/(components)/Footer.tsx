import * as style from "@style/home/footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.footer_wrapper}>
      <div className={style.nav_wrapper}>
        <Link className={style.nav_link} href="/info/about-us">
          About Us
        </Link>
        <Link className={style.nav_link} href="/info/contacts">
          Contact Us
        </Link>
        <Link className={style.nav_link} href="/info/sitemap">
          Sitemap
        </Link>
        <Link className={style.nav_link} href="/info/terms">
          Terms of Use
        </Link>
      </div>
      <div className={style.copyright_wrapper}>
        <span className={style.copy_right}>
          since 2024 Copyright &copy; CrackShopping All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
