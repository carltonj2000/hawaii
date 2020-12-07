import { useEffect } from "react";
import { callbackify } from "util";
import Layout from "../components/layout";
import { Pages } from "../components/nav";
import { map } from "../lib/locations";

const setupMapBox = (accessToken) => {
  mapboxgl.accessToken = accessToken;

  function setupMap(center) {
    if (!mapboxgl.accessToken) return alert("need a mapbox token to continue");
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom: 14,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/cycling",
    });

    map.addControl(directions, "top-left");
  }

  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
  }

  function errorLocation(position) {
    setupMap([-115.179153, 36.114662]);
  }

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
};

export default function Map({ accessToken }) {
  useEffect(() => {
    if (accessToken) setupMapBox(accessToken);
    else setTimeout(() => setupMapBox(accessToken), 1000);
  }, []);
  return (
    <Layout activePage={Pages.Map}>
      <main className="bg-indigo-50">
        <div
          id="map"
          className="w-auto"
          style={{ height: "calc(100vh - 160px)" }}
        ></div>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => ({ props: map() });
