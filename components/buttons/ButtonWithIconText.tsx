import { MouseEventHandler, ReactNode } from "react";
import { useRecoilState } from "recoil";
import { videoModalState } from "../../atoms/video-modal.atom";

interface Props {
  children?: ReactNode;
  className?: string;
  text?: string;
  type: string;
  onClick?: MouseEventHandler;
}

interface VarClass {
  [key: string]: string | undefined;
}

const ButtonWithIconText = ({
  children,
  className,
  text,
  type,
  onClick,
}: Props) => {
  const fixedClass: string =
    "flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl";
  const varClass: VarClass = {
    white: "bg-white text-black",
    grey: "bannerButton bg-[gray]/70",
    dark: "bg-dark text-white",
  };
  return (
    <button
      className={`${fixedClass} ${varClass[type]} ${className}`}
      onClick={onClick}
    >
      {children}
      <h3>{text}</h3>
    </button>
  );
};
export default ButtonWithIconText;
