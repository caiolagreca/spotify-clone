import React from "react";
import { Container } from "./NavbarStyles";
import { FaSearch } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { useStateProvider } from "../../utils/StateProvider";

function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  console.log(userInfo);
  return (
    <Container navBackground={navBackground}>
      <div className="search__bar">
        <FaSearch />
        <input
          type="text"
          placeholder="Buscar por Artista, Música ou Podcast"
        />
      </div>
      <div className="avatar">
        <a href="#">
        <Avatar src={userInfo?.userImage[0]?.url} alt={userInfo?.userName} />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  );
}

export default Navbar;
