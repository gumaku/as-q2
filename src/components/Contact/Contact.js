import React, { useEffect } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="contact"
      onClick={() => {
        navigate("/location", {
          state: {
            lat: props.location.latitude,
            lon: props.location.longitude,
          },replace: false
        });
      }}
    >
      <img className="profile-picture" src={props.picture} />
      <span className="name"> {props.name.first + " " + props.name.last} </span>
    </div>
  );
};
export default Contact;
