import colors from "colors";
import fs from "fs";
import path from "path";
import { locationsInfo } from "../lib/locations";
import srcRoot from "./srcRoot";

(async () => {
  console.log("Image Root Directory:", srcRoot);
  for (let l of locationsInfo) {
    if (!l.images) {
      console.log(colors.green(l.name), colors.gray("skipped"));
      continue;
    }
    console.log(colors.yellow(l.name));
    for (let i of l.images) {
      const imgDir = path.join(l.imageInfo[i[0]][0], i[1]);
      const src = path.join(srcRoot, imgDir);
      const srcSub = src.split("/hawaii/")[1];
      const dst = path.join(__dirname, "../public/img/", imgDir);
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
          console.log("   ", colors.blue(dstSub));
          console.log("   ", colors.cyan(srcSub));
        } else {
          console.log(colors.green("  re-writing linked (from to previous)"));
          console.log("   ", colors.blue(dstSub));
          console.log("   ", colors.cyan(srcSub));
          console.log("   ", colors.magenta(presentLink));
          fs.rmSync(dst);
          fs.symlinkSync(src, dst);
        }
      } else {
        console.log(colors.red("  creating linked (from to)"));
        console.log("   ", colors.blue(dstSub));
        console.log("   ", colors.cyan(srcSub));
        fs.mkdirSync(path.parse(dst).dir, { recursive: true });
        fs.symlinkSync(src, dst);
      }
    }
  }
})().catch((e) => console.log(e));
