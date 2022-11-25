import { HiOutlineBell } from "react-icons/hi";
import HeaderLinks from "./HeaderLinks";
import Logo from "../../icons/Logo";
import Link from "next/link";
import Avatar from "../../icons/Avatar";
import { useEffect, useState } from "react";
// import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled
          ? "bg-dark"
          : "bg-gradient-to-t from-transparent via-dark/80 to-dark"
      } px-[4%] py-8 max-h-14 fixed w-full top-0 z-50 flex justify-between`}
    >
      <div className="flex items-center space-x-6">
        <Logo className=" w-[70px] px-2" />
        <HeaderLinks className="" />
      </div>
      <div className="flex items-center space-x-5">
        <Link className="" href={"/"}>
          <HiOutlineBell className="text-white h-7 w-7" />
        </Link>
        <Link href="/account">
          <Avatar />
        </Link>
      </div>
    </header>
  );
}

export default Header;
