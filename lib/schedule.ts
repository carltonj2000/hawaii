import {
  compareAsc,
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  getSeconds,
  format,
} from "date-fns";

import { locationsInfo } from "./locations";

type ActivitiesT = Array<string>;
type LocationsT = Array<{
  location: string;
  activities: ActivitiesT;
  time: string;
}>;
type DayT = { date: Date | "no date"; locations: LocationsT };
type ScheduleT = Array<DayT>;

interface DayI {
  date: Date;
  time: string;
  name: string;
  activities: ActivitiesT;
}

const dayOnly = (date: Date) =>
  new Date(getYear(date), getMonth(date), getDate(date));

const isTimeZero = (date: Date) =>
  getHours(date) === 0 && getMinutes(date) === 0 && getSeconds(date) === 0;

const getTimeMax = (date: Date) =>
  new Date(getYear(date), getMonth(date), getDate(date), 23, 59, 59);

const getSchedule = (locationsInfo): ScheduleT => {
  const locationsToEndOfDay = locationsInfo.map((l) => {
    const date = isTimeZero(l.date) ? getTimeMax(l.date) : l.date;
    return { ...l, date };
  });
  const locationsSorted = locationsToEndOfDay.sort((a, b) => {
    if (a.date) {
      if (b.date) {
        const avsb = compareAsc(a.date, b.date);
        if (avsb !== 0) return avsb;
        return a.name.localeCompare(b.name);
      } else {
        return -1;
      }
    } else {
      if (b.date) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    }
  });

  const schedule = locationsSorted.reduce((schedule: ScheduleT, day: DayI) => {
    const { date, name: location, activities } = day;
    const time = date ? format(date, "p") : "";
    if (schedule.length === 0) {
      schedule.push({
        date: date || "no date",
        locations: [{ location, activities, time }],
      });
      return schedule;
    }
    const addTo = schedule[schedule.length - 1];
    if (!date) {
      if (addTo.date === "no date") {
        addTo.locations.push({ location, activities, time });
      } else {
        schedule.push({
          date: "no date",
          locations: [{ location, activities, time }],
        });
      }
    } else {
      if (addTo.date === "no date") {
        throw "Programming Error! Sort fail with 'no date' before a date.";
      } else {
        if (compareAsc(dayOnly(date), dayOnly(addTo.date)) === 0) {
          addTo.locations.push({ location, activities, time });
        } else {
          schedule.push({ date, locations: [{ location, activities, time }] });
        }
      }
    }
    return schedule;
  }, []);
  return schedule.map(({ date, locations }) => ({
    date: date !== "no date" ? format(date, "eee LLL d") : date,
    locations,
  }));
};

export const schedule = () => ({ schedule: getSchedule(locationsInfo) });
