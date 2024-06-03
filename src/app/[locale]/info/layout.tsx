import * as style from "@style/info/layout.css";
import InfoSideBar from "./(components)/InfoSideBar";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.info_container}>
      {/** info navigation (clitent Component) */}
      <InfoSideBar />
      <div className={style.grid_item}></div> {/** children position */}
    </div>
  );
}
