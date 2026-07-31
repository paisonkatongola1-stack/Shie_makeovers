import { isValidAppointmentTime, defaultOpeningHours } from "../lib/business/hours";

describe("Business Hours Validation", () => {
  test("accepts appointment times inside standard working hours", () => {
    // 10:00 AM on Monday (default 9 AM - 8 PM)
    expect(isValidAppointmentTime("10:00 AM", "Monday", defaultOpeningHours)).toBe(true);
  });

  test("rejects appointment times outside standard working hours", () => {
    // 08:00 AM on Monday (default 9 AM - 8 PM)
    expect(isValidAppointmentTime("08:00 AM", "Monday", defaultOpeningHours)).toBe(false);
  });

  test("respects Sunday hours (10:00 AM - 06:00 PM)", () => {
    expect(isValidAppointmentTime("09:00 AM", "Sunday", defaultOpeningHours)).toBe(false);
    expect(isValidAppointmentTime("11:00 AM", "Sunday", defaultOpeningHours)).toBe(true);
  });
});
