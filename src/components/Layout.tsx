import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] w-full mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
