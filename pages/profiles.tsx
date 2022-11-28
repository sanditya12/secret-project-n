import { useEffect } from "react";
import ProfileRow from "../components/profile/ProfileRow";
import { motion } from "framer-motion";
import { useUser } from "../hooks/useUser";

const variants = {
  hidden: { opacity: 0, scale: 0.9, y: 0 },
  enter: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0.5, scale: 1.5, y: 0 },
};
const Profiles = () => {
  const { user, setUser } = useUser();
  useEffect(() => {
    setUser("");
  }, []);
  return (
    <div className="bg-dark bg-gradient-to-t from-dark via-dark to-black h-screen flex justify-center items-center pb-20">
      <div className="w-[45%]">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: [0, 0.37, 0.51, 0.75],
          }}
        >
          <h4 className="font-normal text-center mb-10">Who's watching?</h4>
          <ProfileRow />
        </motion.div>
      </div>
    </div>
  );
};
export default Profiles;
