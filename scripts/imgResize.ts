import colors from "colors";
import path from "path";
import fs from "fs-extra";
import { locationsInfo } from "../lib/locations";
import { contentBase, container } from "./contentBase";
import { execSync } from "child_process";
import exifParser from "exif-parser";

const originalSize = [6000, 4000];
const [oriX, oriY] = originalSize;
const sizeY = [1080, 720, 360, 180];
const sizes = sizeY.map((y) => [(oriX * y) / oriY, y]);
const szOutStr = ([x, y]) => `${x}x${y}`;
const szDirName = (sz) => path.join("resized", `size_${szOutStr(sz)}`);

(async () => {
  const prjDir = "hawaii";
  const contentRoot = path.join(contentBase, prjDir);
  console.log("resizing:", colors.cyan(contentRoot));
  for (let l of locationsInfo) {
    if (!l.images) continue;
    for (let i of l.images) {
      const imgDir = path.join(l.imageInfo[i[0]][0], i[1]);
      const imgDirOriginals = path.join(l.imageInfo[i[0]][0], i[1]);
      const imgPath = path.join(contentRoot, imgDir);
      console.log(colors.green(imgPath));
      const imgBuff = fs.readFileSync(imgPath);
      const parser = exifParser.create(imgBuff);
      const result = parser.parse();
      console.log(result);
    }
  }
})().catch((e) => console.log(e));
