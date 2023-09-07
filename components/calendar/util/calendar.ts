import dayjs from "dayjs";

interface CalendarDate {
  date: dayjs.Dayjs;
  isCurrentMonth: boolean;
  isToday?: boolean;
}

export const generateDate = (
  month: number = dayjs().month(),
  year: number = dayjs().year()
): CalendarDate[] => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate: CalendarDate[] = [];
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({ date: firstDateOfMonth.day(i), isCurrentMonth: false });
  }
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      isCurrentMonth: true,
      isToday:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }
  const remaining = 32 - arrayOfDate.length;
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({ date: firstDateOfMonth.date(i), isCurrentMonth: false });
  }
  return arrayOfDate;
};

export const daysjsToDateString = (date: dayjs.Dayjs | null): string => {
  if (date) {
    return date.toDate().toDateString();
  }
  return "";
};
