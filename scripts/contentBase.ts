import os from "os";

export let contentBase = "";
export let container = false;

const cc = (() => {
  switch (os.platform()) {
    case "linux":
      switch (os.hostname()) {
        case "renderws":
          return (contentBase = "/renderws/carltonData/cj_pics/pics2020");
        default:
          switch (os.userInfo().username) {
            case "root":
              container = true;
              return (contentBase = "/carltonData/cj_pics/pics2020");
            default:
              throw "Linux rootDir not setup";
              break;
          }
      }
      break;
    case "darwin":
      switch (os.hostname()) {
        case "CARLTONs-MacBook-Pro.local":
          return (contentBase = "/Users/carltonjoseph/Pictures/pics2020");
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
