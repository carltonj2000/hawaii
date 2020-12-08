import konaDeparture from "./kona-departure";
import vegasDeparture from "./vegas-departure";
import konaArrival from "./kona-arrival";
import oakDeparture from "./oak-departure";

import royalkona from "./royal-kona-resort";

import hapunaBeach from "./hapuna-beach";
import boilingPots from "./boiling-pots";

export type LocaitonT = {
  location: string;
  name: string;
  coordinates: [number, number];
  images: [
    [
      imageInfo: number,
      image: string,
      rotation: number,
      name: string,
      description: string
    ]
  ];
  svg: string;
  activities: string[];
};

export const locationsInfo: LocaitonT[] = [
  royalkona,
  hapunaBeach,
  boilingPots,
  vegasDeparture,
  konaArrival,
  konaDeparture,
  oakDeparture,
];

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
