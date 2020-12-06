import { compareAsc } from "date-fns";
import royalkona from "./royal-kona-resort";
import hanaumBay from "./hanauma-bay";
import { stringify } from "querystring";

const locationsInfo = [royalkona, hanaumBay];

export const homePagePics = () =>
  locationsInfo.reduce((a, l) => {
    if (!l.images) return a;
    const mainPic = l.images.filter((p) => p[1] === l.mainImage);
    const mainImage = mainPic.length === 0 ? l.images[0] : mainPic[0];
    const image = {
      src: `/img/${l.imageInfo[mainImage[0]][0]}/${mainImage[1]}`,
      alt: mainImage[3],
      location: `/pictures/${l.location}`,
    };
    a.push(image);
    return a;
  }, []);

export default homePagePics();

export const locations = () =>
  locationsInfo.map((l) => ({ params: { location: l.location } }));

export const location = (location) => {
  const f = locationsInfo.filter((l) => l.location === location);
  const m = f.map((l) =>
    l.images.map((image) => ({
      src: `/img/${l.imageInfo[image[0]][0]}/${image[1]}`,
      alt: image[3],
    }))
  );
  return { name: f[0].name, images: m[0] };
};

type ActivitiesT = Array<string>;
type LocationsT = Array<{ location: string; activities: ActivitiesT }>;
type DayT = { date: Date | "no date"; locations: LocationsT };
type ScheduleT = Array<DayT>;

interface DayI {
  date: Date;
  name: string;
  activities: ActivitiesT;
}

const getSchedule = (locationsInfo): ScheduleT => {
  const locationsSorted = locationsInfo.sort((a, b) => {
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
    if (schedule.length === 0) {
      schedule.push({
        date: date || "no date",
        locations: [{ location, activities }],
      });
      return schedule;
    }
    const addTo = schedule[schedule.length - 1];
    if (!date) {
      if (addTo.date === "no date") {
        addTo.locations.push({ location, activities });
      } else {
        schedule.push({
          date: "no date",
          locations: [{ location, activities }],
        });
      }
    } else {
      if (addTo.date === "no date") {
        throw "Programming Error! Sort fail with 'no date' before a date.";
      } else {
        if (compareAsc(date, addTo.date) === 0) {
          addTo.locations.push({ location, activities });
        } else {
          schedule.push({ date, locations: [{ location, activities }] });
        }
      }
    }
    return schedule;
  }, []);
  return schedule.map(({ date, locations }) => ({
    date: date !== "no date" ? date.toDateString() : date,
    locations,
  }));
};

export const schedule = () => {
  const schedule = getSchedule(locationsInfo);
  console.log(JSON.stringify(schedule, null, 2));
  return { schedule };
  return {
    schedule: [
      [new Date(2020, 11, 14).toDateString(), "Land At Airport"],
      [new Date(2020, 11, 15).toDateString(), "Hanaum Bay"],
    ],
  };
};
