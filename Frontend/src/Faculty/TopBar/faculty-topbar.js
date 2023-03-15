import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function FacultyTopBar() {
  const iconStyles = {
    color: "white",
    fontSize: "3.5vh",
    margin: "1vh",
    cursor: "pointer",
  };

  return (
    <div className="faculty-topbar">
      <center>CVM University</center>
      <div>
        <span>
          <IoIosNotificationsOutline style={iconStyles} />
        </span>
        <span>
          <CgProfile style={iconStyles} />
        </span>
      </div>
    </div>
  );
}

export default FacultyTopBar;
