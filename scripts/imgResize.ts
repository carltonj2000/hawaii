import colors from "colors";
import path from "path";
import { locationsInfo } from "../lib/locations";
import { contentBase, container } from "./contentBase";
import sharp from "sharp";
import fs from "fs-extra";

const ySizes = [1080, 720, 360, 180];
const szOutStr = ([x, y]) => `${x}x${y}`;
const szDirName = (sz: [number, number]) =>
  path.join("resized", `size_${szOutStr(sz)}`);

(async () => {
  const prjDir = "hawaii";
  const contentRoot = path.join(contentBase, prjDir);
  console.log("resizing:", colors.cyan(contentRoot));
  for (let l of locationsInfo) {
    if (!l.images) continue;
    if (l.imgsSkip) continue;
    for (let i of l.images) {
      const imgDir = path.join(l.imageInfo[i[0]][0], i[1]);
      const imgDirOriginals = path.join(l.imageInfo[i[0]][0], i[1]);
      const imgPath = path.join(contentRoot, imgDir);
      console.log(colors.green(imgPath));
      let image = sharp(imgPath);
      const metadata = await image.metadata();
      const { height, width } = metadata;
      console.log("From:", width, height);
      const imagesResized = [];
      for (let y of ySizes) {
        const hResize = y;
        const wResize = Math.round((width * hResize) / height);
        const fileOutName = path.join(
          contentRoot,
          l.imageInfo[i[0]][0],
          szDirName([wResize, hResize]),
          i[1]
        );
        if (fs.existsSync(fileOutName)) {
          console.log("Skipping", fileOutName);
          continue;
        }
        console.log("Sizing To:", wResize, hResize);
        const resizedImage = await image.resize(wResize).jpeg().toBuffer();
        imagesResized.push({ filename: fileOutName, data: resizedImage });
        image = sharp(resizedImage);
      }
      for (let imageResized of imagesResized) {
        const { filename, data } = imageResized;
        const dir = path.parse(filename).dir;
        if (!fs.pathExistsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        await sharp(data).toFile(filename);
        console.log("Wrote:", filename);
      }
    }
  }
})().catch((e) => console.log(e));
