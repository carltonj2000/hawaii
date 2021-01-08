import konaDeparture from "./kona-departure";
import vegasDeparture from "./vegas-departure";
import konaArrival from "./kona-arrival";
import oakDeparture from "./oak-departure";

import royalKona from "./royal-kona-resort";

import kona1 from "./kona1";

import hapunaBeach from "./hapuna-beach";
import boilingPots from "./boiling-pots";
import rainbowFalls from "./rainbow-falls";
// import kapohoTidePools from "./kapoho-tide-pools"; // overflow in 2018
import papakoleaBeach from "./papakolea-beach";
import kilaueaIkiCrater from "./kilauea-iki-crater";
import blackSandBeach from "./black-sand-beach";

import thaiThaiBistro from "./thai-thai-bistro";

type ImageT = [number, string, number, string, string];
type ImageInfoT = [string, string];
export type LocationT = {
  location: string;
  name: string;
  coordinates?: number[];
  images?: ImageT[];
  svg?: string;
  activities: string[];
  imageInfo?: ImageInfoT[];
  date?: Date;
  mainImage?: string;
  imgsSkip?: boolean;
};

export const locationsInfo: LocationT[] = [
  kona1,
  { ...royalKona, imgsSkip: true },
  { ...hapunaBeach, imgsSkip: true },
  { ...boilingPots, imgsSkip: true },
  { ...rainbowFalls, imgsSkip: true },
  { ...papakoleaBeach, imgsSkip: true },
  { ...blackSandBeach, imgsSkip: true },
  { ...kilaueaIkiCrater, imgsSkip: true },
  // kapohoTidePools, // overflow in 2018
  // food
  thaiThaiBistro,
  // travel
  vegasDeparture,
  konaArrival,
  konaDeparture,
  oakDeparture,
];

export const locations = () =>
  locationsInfo
    .filter((l) => typeof l.images !== "undefined")
    .map((l) => ({ params: { location: l.location } }));

export const location = (location) => {
  const f = locationsInfo.filter((l) => l.location === location);
  const m = f.map((l) =>
    l.images.map((image) => ({
      src: `/hawaii/img/hawaii/${l.imageInfo[image[0]][0]}/${image[1]}`,
      alt: image[3],
    }))
  );
  return { name: f[0].name, images: m[0] };
};
