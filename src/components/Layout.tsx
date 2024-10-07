import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className="max-w-[1300px] w-full mx-auto">{children}</div>;
};

export default Layout;
