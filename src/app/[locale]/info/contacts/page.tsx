import * as style from "@style/info/info.css";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactUs() {
  return (
    <div className={style.contact_us_container}>
      <div className={style.contact_us_main}>
        <span className={style.contact_us_title}>
          Contact <span className={style.text_accent}>Crack Shopping</span>
        </span>
        <span className={style.contact_us_sub_title}>
          For business-related inquiries, please contact us using the methods
          below.
        </span>
      </div>
      <div className={style.contact_method_wrapper}>
        <div className={style.icon_wrapper}>
          <AiOutlineMail className={style.contact_icon} />
        </div>
        <address className={style.adress_warpper}>
          <span className={style.adress_title}>email</span>
          <a className={style.adress_text} href="ruhunsu3@gmail.com">
            ruhunsu3@gmail.com
          </a>
        </address>
      </div>
    </div>
  );
}
