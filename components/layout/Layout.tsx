import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import Profiles from "../profile/profiles";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { user } = useUser();

  const isUserEmpty = user === "";

  return (
    <div className="font-netflix-sans text-white relative overflow-x-clip ">
      {!isUserEmpty && <Header />}
      {children}
      {!isUserEmpty && <Footer />}
    </div>
  );
};

export default Layout;
