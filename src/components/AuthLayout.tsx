import { FC, PropsWithChildren } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const token = Cookies.get("token");
  return token ? <Navigate to="/" /> : children;
};

export default AuthLayout;
