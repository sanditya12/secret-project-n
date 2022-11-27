import { useEffect } from "react";
import ProfileRow from "./ProfileRow";

const Profiles = () => {
  return (
    <div className="bg-dark bg-gradient-to-t from-dark via-dark to-black h-screen flex justify-center items-center pb-20">
      <div className="w-[45%]">
        <h4 className="font-normal text-center mb-10">Who's watching?</h4>
        <ProfileRow />
      </div>
    </div>
  );
};
export default Profiles;
