import * as style from "@style/home/footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.footer_wrapper}>
      <div className={style.nav_wrapper}>
        <Link className={style.nav_link} href="#">
          About Us
        </Link>
        <Link className={style.nav_link} href="#">
          Contact Us
        </Link>
        <Link className={style.nav_link} href="#">
          Sitemap
        </Link>
        <Link className={style.nav_link} href="#">
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
