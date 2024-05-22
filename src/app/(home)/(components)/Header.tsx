import * as style from "../../styles/home/header.css";
import Image from "next/image";
import logo from "../../../../public/assets/logo/logo.png";
function Header() {
  return (
    <div className={style.header_container}>
      <div className={style.logo_wrapper}>
        <Image
          src={logo}
          alt="logo image"
          width={270}
          height={100}
          className={style.temp}
        />
      </div>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
      <div className={style.grid_item}></div>
    </div>
  );
}

export default Header;
