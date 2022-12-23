import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getIp, getLocation } from "../../../../redux/slices/ipTrackerSlice";
import MapView from "./MapView";
import Swal from "sweetalert2";

const IpAdressTracker = () => {
  const [position, setPosition] = useState([0, 0]);

  const dispatch = useDispatch();
  const { ip } = useSelector((state) => state.locationTracker);
  const { location } = useSelector((state) => state.locationTracker);
  const { error } = useSelector((state) => state.locationTracker);

  const [errors, seterrors] = useState(error);

  const [inputIp, setInputIp] = useState({
    ip: "",
  });

  const handleInputChange = (e) => {
    setInputIp({ ...inputIp, [e.target.name]: e.target.value });

    seterrors("");
  };

  const searchIp = () => {
    let aux = inputIp.ip
      .split("/")
      .filter(
        (e) =>
          (e !== "" && e[0]?.toLowerCase() !== "h") ||
          e[0]?.toLowerCase() === "w"
      )[0];

    if (aux.includes("www") || isNaN(aux)) {
      dispatch(getLocation({ ip: "", domain: aux }));
    } else {
      dispatch(getLocation({ ip: inputIp.ip, domain: "" }));
    }
  };
  useEffect(() => {
    Swal.fire({
      icon: "info",
      text: "Allows you to detect your location if you wish(Top left screen), or enter any IP or domain you want to find",
    });
  }, []);

  useEffect(() => {
    dispatch(getIp());
    seterrors(error);
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(getLocation({ ip, domain: "" }));
  }, [ip, dispatch]);

  useEffect(() => {
    if (Object.keys(location).length) {
      setPosition([location.location.lat, location.location.lng]);
      setInputIp({ ip: "" });
    }
  }, [location]);

  return (
    <div id="container_ipAdressTracker">
      <div id="backHeader">
        <h1>IP Address Tracker</h1>
        <div id="searchIp">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            name="ip"
            value={inputIp.ip}
            onChange={handleInputChange}
            className={`${errors.length && "inputError"}`}
          />
          <button
            className={`${errors.length && "disableButton"}`}
            onClick={() => searchIp()}
            disabled={errors.length && true}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </div>
        <span className="error">
          {errors ? "Enter a valid ip or domain" : ""}
        </span>
        <div id="container_infoApi">
          <div id="infoApi">
            <div className="ipBox">
              <p>IP ADDRESS</p>
              <p>{location.ip}</p>
            </div>
            <div className="locationBox">
              <p>LOCATION</p>
              <p>
                {location.location?.city},
                <span>{location.location?.region}</span>
                <span>{location.location?.postalCode}</span>
              </p>
            </div>
            <div className="timezoneBox">
              <p>TIMEZONE</p>
              <p>UTC{location.location?.timezone}</p>
            </div>
            <div className="ispBox">
              <p>ISP</p>
              <p>{location.isp}</p>
            </div>
          </div>
        </div>
      </div>
      <MapView position={position} />
    </div>
  );
};

export default IpAdressTracker;
