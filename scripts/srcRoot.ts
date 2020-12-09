import os from "os";

const srcRoot = (() => {
  switch (os.platform()) {
    case "linux":
      switch (os.hostname()) {
        case "renderws":
          return "/renderws/carltonData/cj_pics/pics2020/hawaii";
        default:
          throw "Linux rootDir not setup";
          break;
      }
      break;
    default:
      throw "Platform rootDir not setup";
      break;
  }
})();

export default srcRoot;
