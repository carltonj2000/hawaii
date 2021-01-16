import { locationsInfo } from "./locations";

export const locations = () =>
  locationsInfo
    .filter((l) => typeof l.images !== "undefined")
    .map((l) => ({ params: { location: l.location } }));

export const location = (location) => {
  const l = locationsInfo.filter((l) => l.location === location)[0];
  const images = l.images.map((i, idx) => ({
    src: `/hawaii/img/hawaii/${l.imageInfo[i[0]][0]}/resized/size_240x180/${
      i[1]
    }`,
    alt: i[3],
    link: `/picture/${l.location}/${i[0]}/${idx}`,
  }));
  return { name: l.name, images };
};
