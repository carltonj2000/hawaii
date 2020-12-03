import royalkona from "./royal-kona-resort";
import hanaumBay from "./hanauma-bay";

const locations = [royalkona, hanaumBay];

export const main = () => {
  const hm = locations.reduce((a, l) => {
    const mainPic = l.images.filter((p) => p[1] === l.mainImage);
    const mainImage = mainPic.length === 0 ? l.images[0] : mainPic[0];
    const image = {
      src: `/img/${l.imageInfo[mainImage[0]][0]}/${mainImage[1]}`,
      alt: mainImage[3],
    };
    a.push(image);
    return a;
  }, []);
  return hm;
};

export default main();
