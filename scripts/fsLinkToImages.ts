import colors from "colors";
import fs from "fs";
import path from "path";
import { locationsInfo } from "../lib/locations";
import { contentBase, container } from "./contentBase";

(async () => {
  const prjDir = "hawaii";
  const contentRoot = path.join(contentBase, prjDir);
  const lnRoot = path.join(__dirname, "../public/img/", prjDir);
  console.log("Content:", colors.cyan(contentRoot));
  console.log("  Links:", colors.blue(lnRoot));
  for (let l of locationsInfo) {
    if (!l.images) {
      console.log(colors.green(l.name), colors.gray("skipped"));
      continue;
    }
    console.log(colors.yellow(l.name));
    for (let i of l.images) {
      const imgDir = path.join(l.imageInfo[i[0]][0], i[1]);
      const content = path.join(contentRoot, imgDir);
      const contentSub = content.split(`/${prjDir}/`)[1];
      const ln = path.join(lnRoot, imgDir);
      const lnSub = ln.replace(path.join(__dirname, "../"), "");
      if (container) {
        console.log("  forced re-writing link (from to)");
        console.log("   ", contentSub);
        console.log("   ", lnSub);
        fs.mkdirSync(path.parse(ln).dir, { recursive: true });
        if (fs.existsSync(ln)) fs.rmSync(ln, { force: true });
        if (fs.lstatSync(ln).isSymbolicLink()) fs.unlinkSync(ln);
        fs.symlinkSync(content, ln);
        continue;
      }
      if (fs.existsSync(ln)) {
        if (!fs.lstatSync(ln).isSymbolicLink()) {
          console.log(" ", colors.red(`skipped NON symlink`));
          console.log("   ", colors.blue(lnSub));
          continue;
        } else {
          const presentLink = fs.realpathSync(ln);
          if (presentLink === content) {
            console.log(colors.green("  already linked (from to)"));
            console.log("   ", colors.cyan(contentSub));
            console.log("   ", colors.blue(lnSub));
          } else {
            console.log(colors.green("  re-writing link (from to previous)"));
            console.log("   ", colors.cyan(contentSub));
            console.log("   ", colors.blue(lnSub));
            console.log("   ", colors.magenta(presentLink));
            fs.rmSync(ln);
            fs.symlinkSync(content, ln);
          }
        }
      } else {
        console.log(colors.red("  creating link (from to)"));
        console.log("   ", colors.cyan(contentSub));
        console.log("   ", colors.blue(lnSub));
        fs.mkdirSync(path.parse(ln).dir, { recursive: true });
        fs.symlinkSync(content, ln);
      }
    }
  }
})().catch((e) => {
  console.log(e);
  return -1;
});
