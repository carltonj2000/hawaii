import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Pages } from "../components/nav";
import { map } from "../lib/mapLocations";

const setupMapBox = (accessToken, geoJson) => {
  mapboxgl.accessToken = accessToken;

  function setupMap(center) {
    if (!mapboxgl.accessToken)
      return console.log("need a mapbox token to continue");
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom: 9,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "bottom-right");

    /*
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/cycling",
    });
    map.addControl(directions, "bottom-left");
    */
    geoJson.features.forEach(function (marker) {
      var el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = marker.svg;
      el.style.width = "30px";
      el.style.height = "30px";

      el.addEventListener("click", function () {
        const data = marker.data.map(
          ({ message, activities }) =>
            message +
            " - " +
            activities.reduce((a, b) => (a + b ? ", " + b : "")) +
            "\n"
        );
        window.alert(data);
      });

      new mapboxgl.Marker(el).setLngLat(marker.coordinates).addTo(map);
    });
  }

  function successLocation(position) {
    //setupMap([position.coords.longitude, position.coords.latitude]);
    setupMap([-155.52321733515763, 19.61279834150175]);
  }

  function errorLocation(position) {
    setupMap([-155.99039300342224, 19.63233770531766]);
  }
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
};

export default function Map({ accessToken, geoJson }) {
  const [atToggle, atToggleSet] = useState(true);
  useEffect(() => {
    if (accessToken && typeof mapboxgl !== "undefined")
      setupMapBox(accessToken, geoJson);
    else setTimeout(() => atToggleSet(!atToggle), 1000);
  }, [atToggle]);
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
