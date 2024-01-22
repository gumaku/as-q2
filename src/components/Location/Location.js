import React, { useEffect } from "react";
import "./Location.css";

const Location = (props) => {
    
  useEffect(() => {
    const iframeData = document.getElementById("iFrameId");
    console.log(props.lat);
    console.log(props.lon);
    iframeData.src=`https://maps.google.com/maps?q=${props.lat},${props.lon}&hl=es;&output=embed`

  }, []);
  return (
    <div>
        <iframe id="iFrameId"></iframe>
    </div>
  );
};
export default Location;
