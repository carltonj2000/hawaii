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

export const picture = ({ location, grp, id: idIn }) => {
  const l = locationsInfo.filter((l) => l.location === location)[0];
  const g = l.imageInfo[parseInt(grp)][0];
  const id = parseInt(idIn);
  const i = l.images[id];
  const idn = (id + 1) % l.images.length;
  const idp = id - 1 < 0 ? l.images.length - 1 : id - 1;
  const gn = l.images[idn][0];
  const gp = l.images[idp][0];
  const next = `/picture/${location}/${gn}/${idn}`;
  const previous = `/picture/${location}/${gp}/${idp}`;
  return {
    src: `/hawaii/img/hawaii/${g}/resized/size_1440x1080/${i[1]}`,
    alt: i[3],
    next,
    previous,
  };
};
