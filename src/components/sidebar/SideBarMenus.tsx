import "./SideBarMenus.css";
import {
  faRegistered,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const SidebarMenus = () => {
  const user = "user";

  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">
            <Link to={`userprofile/${user}`}>{user}</Link>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span className="menu-name">register</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="menu-name">login</span>
        </li>
      </ul>
    </React.Fragment>
  );
};
