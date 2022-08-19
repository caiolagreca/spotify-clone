import React from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { Container } from "./VolumeStyles";
import axios from "axios";
import {BsFillVolumeUpFill} from 'react-icons/bs'

function Volume() {
  const [{ token }, dispatch] = useStateProvider();

  const setVolume = async (e) => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <Container>
      <BsFillVolumeUpFill className="icon" />
      <input type="range" className="bar" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
    </Container>
  );
}

export default Volume;
