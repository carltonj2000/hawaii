import Link from "next/link";
import Hibiscus from "./images/Hibiscus";
import Camera from "./images/Camera";
import VideoCamera from "./images/VideoCamera";
import Home from "./images/Home";
import Map from "./images/Map";
import ClipboardList from "./images/ClipboardList";

export enum Pages {
  Pictures,
  Videos,
  Schedule,
  Map,
}

export default function Nav({
  activePage = Pages.Pictures,
  title = "Hawaii",
}: {
  activePage: Pages;
  title: string;
}) {
  const isActive = (page: Pages) =>
    "p1 rounded-xl" + (page === activePage ? " shadow-lg bg-indigo-300" : "");
  return (
    <nav className="z-2 py-4 px-4 sm:px-6 flex justify-between shadow-md bg-indigo-100">
      <div className="flex space-x-4 sm:space-x-6 items-center">
        <Link href="/">
          <a className={`links${isActive(Pages.Pictures)}`}>
            <Camera />
          </a>
        </Link>
        <Link href="/map">
          <a className={`links${isActive(Pages.Map)}`}>
            <Map />
          </a>
        </Link>
        <Link href="/videos">
          <a className={`links${isActive(Pages.Videos)}`}>
            <VideoCamera />
          </a>
        </Link>
        <Link href="/schedule">
          <a className={`links${isActive(Pages.Schedule)}`}>
            <ClipboardList />
          </a>
        </Link>
      </div>
      <div className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-500">
        {title}
      </div>
      <div className="flex items-center">
        <a href="localhost:3000/main" className="mr-4 text-icon">
          <Home />
        </a>
        <Hibiscus />
      </div>
    </nav>
  );
}
