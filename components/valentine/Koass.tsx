import Router, { useRouter } from "next/router";
import { useUser } from "../../hooks/useUser";
import { HiHeart } from "react-icons/hi";
import { useState } from "react";
import { dataKoass } from "./koass.constant";
import { motivations } from "./motivations";

interface Props {
  className?: string;
}

const data_koass = dataKoass();
const cheers = motivations();

const Koass = ({ className }: Props) => {
  const [index, setIndex] = useState(0);
  const [rand, setRand] = useState(0);
  const [isMotivation, setIsMotivation] = useState(false);
  return (
    <div className={`relative`}>
      <div className={`bubble w-[30rem] relative `}>
        <p
          className={`${
            !isMotivation && "font-indie-flower"
          } cursor-pointer min-h-[14rem]`}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          {!isMotivation ? data_koass[index] : cheers[rand]}
        </p>
        <div
          className="absolute top-[95%] -left-28 sandi"
          onClick={() => {
            setIsMotivation(true);
            setRand(Math.floor(Math.random() * cheers.length));
          }}
        >
          <img
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            src="/images/logosan.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Koass;
