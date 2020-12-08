import { locationsInfo } from "./locations";

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

export default homePagePics;
