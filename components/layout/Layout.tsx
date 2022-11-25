import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="font-netflix-sans text-white relative overflow-x-clip ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
