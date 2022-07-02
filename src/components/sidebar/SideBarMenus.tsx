import "./SideBarMenus.css";
import {
  faRegistered,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store/AppState";
import { UserProfileSetType } from "../../store/user/Reducer";

export const SidebarMenus = () => {
  const user = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">
            <Link to={`userprofile/${user?.id}`}>{user?.userName}</Link>
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
