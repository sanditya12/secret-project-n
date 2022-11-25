import Image from "next/image";
import ButtonWithIconText from "./buttons/ButtonWithIconText";
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="h-[80vh] px-[4%]">
      <div className="absolute top-0 left-0 -z-10 h-[110vh] w-screen  bg-gradient-to-r  from-dark via-dark/10 to-transparent ">
        <Image
          layout="fill"
          src={`/PLACEHOLDERS/Banner.png`}
          objectFit="cover"
          className="mix-blend-overlay"
        />
      </div>

      {/* CONTENT */}
      <div className=" h-full flex flex-col justify-center max-w-2xl relative top-[10%]">
        <h1 className="pb-4">Dreamy</h1>
        <h2 className="pb-4">
          Remember this conversation we had? u said it was "dreamy". But for me,
          every chance I got to converse with you always have this dreamy
          feeling la~
        </h2>
        <div className="flex space-x-3">
          <ButtonWithIconText text="Play" type="white">
            <FaPlay />
          </ButtonWithIconText>
          <ButtonWithIconText text="More Info" type="grey">
            <HiOutlineInformationCircle />
          </ButtonWithIconText>
        </div>
      </div>
    </div>
  );
};
export default Banner;
