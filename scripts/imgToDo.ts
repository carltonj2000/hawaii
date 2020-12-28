import colors from "colors";
import path from "path";
import { locationsInfo } from "../lib/locations";
import { contentBase, container } from "./contentBase";
import { execSync } from "child_process";

const doBase = "/home/carltonj2000/do20041/sites/carltonData/cj_pics/pics2020";
const doAccount = "carltonj2000@apps4tracking.com";

(async () => {
  const prjDir = "hawaii";
  const contentRoot = path.join(contentBase, prjDir);
  const doRoot = path.join(doBase, prjDir);
  execSync(`ssh ${doAccount} mkdir -p ${doRoot}`);
  console.log("From:", colors.cyan(contentRoot));
  console.log("  To:", colors.blue(doRoot));
  console.log("  At:", colors.gray(doAccount));
  for (let l of locationsInfo) {
    if (!l.images) continue;
    for (let i of l.images) {
      const imgDir = path.join(l.imageInfo[i[0]][0], i[1]);
      const content = path.join(contentRoot, imgDir);
      const doI = path.join(doRoot, imgDir);
      execSync(`ssh ${doAccount} mkdir -p ${path.parse(doI).dir}`);
      execSync(`rsync ${content} ${doAccount}:${doI}`);
      console.log(colors.green(imgDir));
    }
  }
})().catch((e) => console.log(e));
