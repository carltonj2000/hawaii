import Link from "next/link";
import Hibiscus from "./Hibiscus";
import FlagOfHawaii from "./FlagOfHawaii";
import Camera from "./Camera";
import VideoCamera from "./VideoCamera";
import Calender from "./Calender";
import Map from "./Map";

export enum Pages {
  Pictures,
  Videos,
  Schedule,
  Map,
}

export default function Nav({
  activePage = Pages.Pictures,
}: {
  activePage: Pages;
}) {
  const isActive = (page: Pages) =>
    "p1 rounded-xl" + (page === activePage ? " shadow-lg bg-indigo-300" : "");

  return (
    <nav className="py-4 px-6 flex justify-between shadow-md bg-indigo-100">
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
            <Calender />
          </a>
        </Link>
      </div>
      <Hibiscus />
    </nav>
  );
}
