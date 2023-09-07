import { useRouter } from "next/router";

const ProfileLocked = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/anniv");
  };

  return (
    <div className={`text-center group`} onClick={handleClick}>
      <div className="relative ">
        <img
          className={` cursor-pointer object-cover rounded h-32 w-32 group-hover:border-solid group-hover:border-white group-hover:border-2 `}
          src="/PLACEHOLDERS/us.jpg"
          alt="Us"
        />

        {/* <Countdown
          renderer={({ hours, minutes, seconds, days }) => {
            return (
              <h3 className="text-red font-bold absolute -bottom-24 left-0 right-0 mx-auto  ">
                {days}d : {hours}h : {minutes}m : {seconds}s
              </h3>
            );
          }}
          date={date}
        /> */}
      </div>

      <div className="mt-4 ">
        <h2 className={`text-light-grey group-hover:text-white `}>Us</h2>
      </div>
    </div>
  );
};
export default ProfileLocked;
