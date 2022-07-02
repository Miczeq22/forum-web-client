import "./Nav.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { SidebarMenus } from "./sidebar/SideBarMenus";

export const Nav = () => {
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);

  const getMobileMenu = () => {
    if (width <= 768) {
      return (
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          className="nav-mobile-menu"
          onClick={handleHamburgerClick}
        />
      );
    }

    return null;
  };

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseClick = () => {
    setShowMenu(false);
  };

  return (
    <React.Fragment>
      <ReactModal
        className="modal-menu"
        isOpen={showMenu}
        onRequestClose={handleCloseClick}
        shouldCloseOnOverlayClick
      >
        <SidebarMenus />
      </ReactModal>
      <nav className="navigation">
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </nav>
    </React.Fragment>
  );
};
