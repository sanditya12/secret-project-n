import Logo from "../../icons/Logo";
import { AiFillHeart } from "react-icons/ai";
import { CiSun, CiStar } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=" pb-16 pt-28 bg-dark">
      <div className="flex justify-center mb-1">
        <Logo />
      </div>
      <div className="flex justify-center  items-center">
        <CiSun size={22} />
        <AiFillHeart color="#b0b0b0" size={14} />
        <CiStar size={22} />
      </div>
    </footer>
  );
};

export default Footer;
