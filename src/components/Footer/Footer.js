import React from "react";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";
import Volume from "../Volume/Volume";
import { Container } from "./FooterStyles";

function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  );
}

export default Footer;
