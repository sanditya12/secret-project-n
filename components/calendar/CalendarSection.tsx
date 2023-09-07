import Calendar from "./Calendar";

const CalendarSection = () => {
  return (
    <div className="mt-80">
      <h2 className="mb-36 text-center">
        Ini ada hadiah kecil dariku, yang mungkin bisa bantu kita lebih mengerti
        satu sama lain tiap hari :)
      </h2>
      <div className="flex justify-center space-x-28 px-8 text-center">
        <div>
          <h2 className={` text-3xl`}>san's</h2>
          <Calendar owner="san's" />
        </div>
        <div>
          <h2 className={` text-3xl`}>sha's</h2>
          <Calendar owner="sha's" />
        </div>
      </div>
    </div>
  );
};
export default CalendarSection;
