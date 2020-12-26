import { locationsInfo } from "./locations";

/* rss - swimming, hand - hiking, eating - heart, lodging - home */
const validSvgs = ["rss", "marker", "home", "heart", "airplane"];

const geoJson = (features) => ({ geoJson: { features } });

export const mapLocations = () => {
  const locations = locationsInfo
    .filter((l) => l.coordinates)
    .map(({ location, name, coordinates, svg, activities }) => ({
      id: location,
      message: name,
      coordinates: [coordinates[1], coordinates[0]],
      svg: svg ? `url(/svg/${svg}.svg)` : "url(/svg/home.svg)",
      activities,
    }));
  const uniqueLs = locations.reduce(
    (a, { id, message, coordinates, svg, activities }) => {
      if (a.length === 0) {
        a.push({ id, data: [{ message, activities }], svg, coordinates });
        return a;
      }
      const pushed = a.reduce((a, { coordinates: ca, data, ...rest }) => {
        if (ca[0] === coordinates[0] && ca[1] === coordinates[1]) {
          data.push({ message, activities });
          return true;
        }
        return a;
      }, false);
      if (!pushed)
        a.push({ id, data: [{ message, activities }], svg, coordinates });
      return a;
    },
    []
  );
  return { accessToken: process.env.ACCESS_TOKEN, ...geoJson(uniqueLs) };
};
