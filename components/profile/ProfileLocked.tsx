import Countdown from "react-countdown";

const ProfileLocked = () => {
  const date = new Date("2023-09-07T10:00:00.000Z");
  return (
    <div className={`text-center group`}>
      <div className="relative ">
        <img
          className={`cursor-pointer object-cover rounded h-32 w-32 `}
          src="/PLACEHOLDERS/us.jpg"
          alt="Us"
        />
        <div className="absolute top-0 left-0 rounded h-32 w-32 bg-black opacity-70"></div>
        <Countdown
          renderer={({ hours, minutes, seconds, days }) => {
            return (
              <h3 className="text-red font-bold absolute -bottom-24 left-0 right-0 mx-auto  ">
                {days}d : {hours}h : {minutes}m : {seconds}s
              </h3>
            );
          }}
          date={date}
        />
      </div>

      <div className="mt-4 ">
        <h2 className={`text-[#7D7D7D] `}>Us</h2>
      </div>
    </div>
  );
};
export default ProfileLocked;
