import os from "os";

const srcMain = (() => {
  switch (os.platform()) {
    case "linux":
      switch (os.hostname()) {
        case "renderws":
          return "/renderws/carltonData/cj_pics/pics2020";
        default:
          throw "Linux rootDir not setup";
          break;
      }
      break;
    case "darwin":
      switch (os.hostname()) {
        case "CARLTONs-MacBook-Pro.local":
          return "/Users/carltonjoseph/Pictures/pics2020";
        default:
          throw "Apple Mac rootDir not setup";
          break;
      }
      break;
    default:
      throw "Platform rootDir not setup";
      break;
  }
})();

export default srcMain;
