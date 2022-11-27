import { TIME_CAPSULE_IMAGES } from "../constants/time-capsule-images.constant";
import ButtonWithIconText from "./buttons/ButtonWithIconText";
import CascadingRow from "./layout/row/CascadingRow";
import { CgPill } from "react-icons/cg";

const TimeCapsule = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between h-60 px-8">
        <div className="space-y-5  pr-10 mt-12">
          <div className="space-y-2">
            <h4 className="font-bold">Time Capsule</h4>
            <h2>Hello future us!</h2>
          </div>
          <ButtonWithIconText text="Create Time Capsule" type="white">
            <CgPill />
          </ButtonWithIconText>
        </div>
        <CascadingRow direction="right" images={TIME_CAPSULE_IMAGES} />
      </div>
    </div>
  );
};
export default TimeCapsule;
