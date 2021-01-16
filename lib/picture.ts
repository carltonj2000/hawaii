import { locationsInfo } from "./locations";

export const pictures = locationsInfo
  .filter((l) => typeof l.images !== "undefined" && !l.imgsSkip)
  .map((l) =>
    l.images.map((img, id) => ({
      params: {
        location: l.location,
        grp: img[0].toString(),
        id: id.toString(),
      },
    }))
  )
  .flat(1);

export const picture = ({ location, grp, id }) => {
  const l = locationsInfo.filter((l) => l.location === location)[0];
  const g = l.imageInfo[parseInt(grp)][0];
  const i = l.images[parseInt(id)];
  return {
    src: `/hawaii/img/hawaii/${g}/resized/size_1440x1080/${i[1]}`,
    alt: i[3],
  };
};
