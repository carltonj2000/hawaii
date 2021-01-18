import { locationsInfo } from "./locations";

export const locations = () =>
  locationsInfo
    .filter((l) => typeof l.images !== "undefined" && !l.imgsSkip)
    .map((l) => ({ params: { location: l.location } }));

export const location = (location) => {
  const locationsI = locationsInfo.filter(
    (l) => typeof l.images !== "undefined" && !l.imgsSkip
  );
  const idx = locationsI.findIndex((l) => l.location === location);
  const l = locationsI[idx];
  const idxNext = (idx + 1) % locationsI.length;
  const idxPrevious = idx - 1 < 0 ? locationsI.length - 1 : idx - 1;
  const next = locationsI[idxNext].location;
  const previous = locationsI[idxPrevious].location;
  const images = l.images.map((i, idx) => ({
    src: `/hawaii/img/hawaii/${l.imageInfo[i[0]][0]}/resized/size_240x180/${
      i[1]
    }`,
    alt: i[3],
    link: `/picture/${l.location}/${i[0]}/${idx}`,
  }));
  return { name: l.name, images, next, previous };
};
