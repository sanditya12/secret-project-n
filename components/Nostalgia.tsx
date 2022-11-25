import ButtonWithIconText from "./buttons/ButtonWithIconText";
import { BsStars } from "react-icons/bs";
import CascadingRow from "./layout/row/CascadingRow";
import { NOSTALGIA_IMAGES } from "../constants/nostalgia-images.constant";

const Nostalgia = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between h-60 px-8">
        <CascadingRow direction="left" images={NOSTALGIA_IMAGES} />
        <div className="space-y-5  pr-10 mt-12">
          <div className="space-y-2">
            <h4 className="font-bold">Nostalgia</h4>
            <h2>"Aku lagi baca chat kita yang lama..."</h2>
          </div>
          <ButtonWithIconText text="Enter Nostalgia" type="dark">
            <BsStars />
          </ButtonWithIconText>
        </div>
      </div>
    </div>
  );
};
export default Nostalgia;
