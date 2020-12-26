import colors from "colors";
import fs from "fs";
import path from "path";
import { locationsInfo } from "../lib/locations";
import srcMain from "./srcMain";

(async () => {
  const prjDir = "hawaii";
  const srcRoot = path.join(srcMain, prjDir);
  const dstRoot = path.join(__dirname, "../public/img/", prjDir);
  console.log("Image Src Directory:", colors.cyan(srcRoot));
  console.log("Image Dst Directory:", colors.blue(dstRoot));
  for (let l of locationsInfo) {
    if (!l.images) {
      console.log(colors.green(l.name), colors.gray("skipped"));
      continue;
    }
    console.log(colors.yellow(l.name));
    for (let i of l.images) {
      const imgDir = path.join(l.imageInfo[i[0]][0], i[1]);
      const src = path.join(srcRoot, imgDir);
      const srcSub = src.split(`/${prjDir}/`)[1];
      const dst = path.join(dstRoot, imgDir);
      const dstSub = dst.replace(path.join(__dirname, "../"), "");
      if (fs.existsSync(dst)) {
        if (fs.statSync(dst).isSymbolicLink()) {
          console.log(" ", colors.red(`skipped NON symlink`));
          console.log("   ", colors.blue(dstSub));
          break;
        }
        const presentLink = fs.realpathSync(dst);
        if (presentLink === src) {
          console.log(colors.green("  already linked (from to)"));
          console.log("   ", colors.cyan(srcSub));
          console.log("   ", colors.blue(dstSub));
        } else {
          console.log(colors.green("  re-writing linked (from to previous)"));
          console.log("   ", colors.cyan(srcSub));
          console.log("   ", colors.blue(dstSub));
          console.log("   ", colors.magenta(presentLink));
          fs.rmSync(dst);
          fs.symlinkSync(src, dst);
        }
      } else {
        console.log(colors.red("  creating linked (from to)"));
        console.log("   ", colors.cyan(srcSub));
        console.log("   ", colors.blue(dstSub));
        fs.mkdirSync(path.parse(dst).dir, { recursive: true });
        fs.symlinkSync(src, dst);
      }
    }
  }
})().catch((e) => console.log(e));
