import Image from "next/image";
import SearchBar from "./SearchBar";
import * as style from "../../../styles/home/header.css";
import logo from "../../../../../public/assets/logo/logo.png";

function Header() {
  return (
    <header className={style.header_container}>
      <div className={style.logo_wrapper}>
        <Image
          src={logo}
          alt="logo image"
          width={270}
          height={100}
          className={style.logo_image}
        />
      </div>
      <SearchBar />
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
    </header>
  );
}

export default Header;
