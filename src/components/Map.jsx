import GoogleMap from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

function LocationPin() {
  return <PersonPinCircleIcon />;
}
export default function Map({ user }) {
  const defaultMap = {
    center: [+user.address.geo.lat, +user.address.geo.lng ],
    zoom: 11,
  };
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: "place your api key" }}
        center={defaultMap.center}
        zoom={defaultMap.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin lat={user.address.geo.lat} lng={user.address.geo.lng} text="marker"/>
      </GoogleMap>
    </div>
  );
}
