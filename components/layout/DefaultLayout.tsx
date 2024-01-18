import { FC, ReactNode } from "react";
import AppHead from "../common/AppHead";
import UserNav from "../common/nav/UserNav";
import Footer from "../common/Footer";

interface Props {
  title?: string;
  desc?: string;
  thumbnail?: string;
  children?: ReactNode;
}


const DefaultLayout: FC<Props> = ({ children, title, desc }): JSX.Element => {
  return (
    <>
      {/* <AppHead title={title} desc={desc}/> */}
      <div className="min-h-screen bg-primary dark:bg-primary-dark transition">
        <UserNav />
        <div className="mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
