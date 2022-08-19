import React from "react";
import { Container } from "./SidebarStyles";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "../Playlists/Playlists";
import logo from "./lagfy.png";

function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src={logo}
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Início</span>
          </li>
          <li>
            <MdSearch />
            <span>Buscar</span>
          </li>
          <li>
            <IoLibrary />
            <span>Sua Biblioteca</span>
          </li>
        </ul>
      </div>
      <hr />
      <Playlists />
    </Container>
  );
}

export default Sidebar;
