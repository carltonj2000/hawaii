import konaDeparture from "./kona-departure";
import vegasDeparture from "./vegas-departure";
import konaArrival from "./kona-arrival";
import oakDeparture from "./oak-departure";

import royalKona from "./royal-kona-resort";

import kona1 from "./kona1";
import alula1 from "./alula1";
import manini1 from "./manini1";
import kilauea1 from "./kilaueaVolcano1";
import waipio from "./waipio";
import greensand from "./green-sand-beach";

import hapunaBeach from "./hapuna-beach";
import boilingPots from "./boiling-pots";
import rainbowFalls from "./rainbow-falls";
// import kapohoTidePools from "./kapoho-tide-pools"; // overflow in 2018
import papakoleaBeach from "./papakolea-beach";
import kilaueaIkiCrater from "./kilauea-iki-crater";
import blackSandBeach from "./black-sand-beach";

import thaiThaiBistro from "./thai-thai-bistro";

type ImageT = [number, string, number, string, string];
type ImageInfoT = [string, string, Date?];
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
  alula1,
  manini1,
  kilauea1,
  waipio,
  greensand,
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
