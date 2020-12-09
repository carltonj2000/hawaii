import Link from "next/link";
import Hibiscus from "./images/Hibiscus";
import Camera from "./images/Camera";
import VideoCamera from "./images/VideoCamera";
import Calender from "./images/Calender";
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
    <nav className="z-2 py-4 px-6 flex justify-between shadow-md bg-indigo-100">
      <div className="flex space-x-6 items-center">
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
      <div className="text-3xl font-bold text-gray-500">{title}</div>
      <Hibiscus />
    </nav>
  );
}
