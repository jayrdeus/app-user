import GoogleMap from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

function LocationPin() {
  return <PersonPinCircleIcon />;
}
export default function Map({ user }) {
    console.log(user,'mapcomp')
  const defaultMap = {
    center: [+user.address.geo.lat, +user.address.geo.lng ],
    zoom: 11,
  };
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyC0sneO79rsRToj_N3YZ8YI8AZN4X2fhts" }}
        center={defaultMap.center}
        zoom={defaultMap.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin lat={user.address.geo.lat} lng={user.address.geo.lng} text="marker"/>
      </GoogleMap>
    </div>
  );
}
