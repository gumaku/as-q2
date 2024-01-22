import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Location from "../components/Location/Location";
import { Button } from "react-bootstrap";
const LocationView = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Button variant="primary" onClick={() => {
                navigate("/", {replace: true
                  });
      }}>Back</Button> <Location lat={location.state.lat } lon={location.state.lon} />
    </>
  );
};
export default LocationView;
