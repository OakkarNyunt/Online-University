import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { FaLocationDot } from "react-icons/fa6";
import L from "leaflet";
import { renderToString } from "react-dom/server"; //important

export default function Map() {
  const customIcon = L.divIcon({
    html: renderToString(<FaLocationDot className="text-red-700 text-3xl" />),
    iconSize: [24, 24],
    className: "custom-icon", // you can style with Tailwind if needed
  });

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow z-0">
      <MapContainer
        center={[16.833375104642037, 96.13617039673308]} // Yangon example
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[16.833375104642037, 96.13617039673308]}
          icon={customIcon}
        >
          <Popup>
            <div className="flex gap-2">
              <FaLocationDot className="text-red-700" />{" "}
              <span>Online University</span>{" "}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
