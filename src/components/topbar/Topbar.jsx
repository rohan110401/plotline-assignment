import React from "react";
import "./topbar.css";
// import { NotificationsNone, Language, Settings } from '@material-ui/icons'
// import ForwardIcon from "@material-ui/icons/Forward";

const Topbar = () => {
  // Top bar with logo at the top left.
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
        <div class="vl"></div>
        <div className="topRight">
          <span className="logo">Data</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
