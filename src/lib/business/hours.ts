export interface OpeningHours {
  day: string; // "Monday", etc.
  open: string; // "09:00 AM"
  close: string; // "08:00 PM"
  isClosed: boolean;
}

export const defaultOpeningHours: OpeningHours[] = [
  { day: "Monday", open: "09:00 AM", close: "08:00 PM", isClosed: false },
  { day: "Tuesday", open: "09:00 AM", close: "08:00 PM", isClosed: false },
  { day: "Wednesday", open: "09:00 AM", close: "08:00 PM", isClosed: false },
  { day: "Thursday", open: "09:00 AM", close: "08:00 PM", isClosed: false },
  { day: "Friday", open: "09:00 AM", close: "08:00 PM", isClosed: false },
  { day: "Saturday", open: "09:00 AM", close: "08:00 PM", isClosed: false },
  { day: "Sunday", open: "10:00 AM", close: "06:00 PM", isClosed: false },
];

export function isDateClosed(date: Date, closedDates: Date[]): boolean {
  return closedDates.some(
    (closedDate) =>
      closedDate.getFullYear() === date.getFullYear() &&
      closedDate.getMonth() === date.getMonth() &&
      closedDate.getDate() === date.getDate()
  );
}

export function isValidAppointmentTime(time: string, dayOfWeek: string, hours: OpeningHours[]): boolean {
  const dayConfig = hours.find((h) => h.day.toLowerCase() === dayOfWeek.toLowerCase());
  if (!dayConfig || dayConfig.isClosed) return false;

  // Simple time comparison helper
  const parseTime = (t: string) => {
    const [timePart, modifier] = t.split(" ");
    let [hoursStr, minutesStr] = timePart.split(":");
    let hoursNum = parseInt(hoursStr, 10);
    if (modifier === "PM" && hoursNum < 12) hoursNum += 12;
    if (modifier === "AM" && hoursNum === 12) hoursNum = 0;
    return hoursNum * 60 + parseInt(minutesStr, 10);
  };

  const apptMinutes = parseTime(time);
  const openMinutes = parseTime(dayConfig.open);
  const closeMinutes = parseTime(dayConfig.close);

  return apptMinutes >= openMinutes && apptMinutes <= closeMinutes;
}
