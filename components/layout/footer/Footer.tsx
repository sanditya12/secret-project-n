import Logo from "../../icons/Logo";
import { AiFillHeart } from "react-icons/ai";
import { CiSun, CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";

interface Dialogue {
  san: string;
  sha: string;
  isSanFirst: boolean;
}

const dialogues = [
  {
    san: "mo denger lagu apa?",
    sha: "denger lagu kamu aja!",
    isSanFirst: true,
  },
  {
    san: "EHH TAPI BUKAN BERARTI AKU BILANG GINI KRN AKU MAU YA",
    sha: "haha :) ",
    isSanFirst: true,
  },
  {
    san: "ini hakao kamu mau ga",
    sha: "... ",
    isSanFirst: true,
  },
  {
    san: "iya :)",
    sha: "sanditya...",
    isSanFirst: false,
  },
  {
    san: 'Ah kamu mah cuma fuel my ego doang :"',
    sha: "keren kamu",
    isSanFirst: false,
  },
  {
    san: "sore olahraga gaa",
    sha: "OR Laa! mo PI ato GBK?",
    isSanFirst: true,
  },
  {
    san: "mata kamu lagi ngelengkung :)",
    sha: "melengkung kyk gimana sih?!",
    isSanFirst: true,
  },
  {
    san: "mata kamu lagi ngelengkung :)",
    sha: "melengkung kyk gimana sih?!",
    isSanFirst: true,
  },
  {
    san: "Ha?",
    sha: "aku suka bulu mata kamu",
    isSanFirst: false,
  },
  {
    san: "sha ini tiket parkir",
    sha: "oke aku taro hp yaa",
    isSanFirst: true,
  },
  {
    san: "sha aku kyknya gini aja deh..",
    sha: "itsokay sayang itu pasti udah kamu timbang2 keputusannya",
    isSanFirst: true,
  },
  {
    san: "aku lagi OR",
    sha: "wih flap!! :D",
    isSanFirst: true,
  },
  {
    san: "sha maaf..",
    sha: "itsokay sayang u did ur best!",
    isSanFirst: true,
  },
  {
    san: "aw man",
    sha: "mo ajak jalan mpc!!",
    isSanFirst: false,
  },
  {
    san: "aku mau denger.",
    sha: "kamu gasuka topik ini san",
    isSanFirst: false,
  },
  {
    san: "pleaseeeee boleh gaa",
    sha: "bole la bole",
    isSanFirst: true,
  },
  {
    san: "aku seneng liat kamu",
    sha: "ciee kesemsem",
    isSanFirst: true,
  },
  {
    san: "LAA aku juga gitu!!",
    sha: "ngikut wle",
    isSanFirst: true,
  },
];

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const num = Math.floor(Math.random() * dialogues.length);
  const [dialogue, setDialogue] = useState({} as Dialogue);
  useEffect(() => {
    setDialogue(dialogues[num]);
  }, []);
  const firstClass = "-top-8 ";
  const secondClass = "-top-4 ";
  return (
    <footer className=" pb-16 pt-28 bg-dark">
      <div className="flex justify-center mb-1">
        <div className="relative text-xs">
          {isHovered && (
            <p
              className={`font-indie-flower absolute  text-grey ${
                dialogue.isSanFirst ? firstClass : secondClass
              } -left-10 max-w-[105px]`}
            >
              - {dialogue.san}
            </p>
          )}
          {isHovered && (
            <p
              className={`font-indie-flower absolute ${
                dialogue.isSanFirst ? secondClass : firstClass
              } -right-10 text-right max-w-[105px]`}
            >
              {dialogue.sha} -
            </p>
          )}

          <div
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseOut={() => {
              setIsHovered(false);
            }}
          >
            <Logo />
          </div>
        </div>
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
