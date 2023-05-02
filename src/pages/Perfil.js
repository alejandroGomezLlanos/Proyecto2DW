import { useState } from "react";
import "../styles.css";

import Banner from "../componentes/Banner";
import Info from "../componentes/Info";
import Star from "../componentes/Star";

export default function Perfil() {
  return (
    <>
      <Banner />
      <div class="card" style={{ width: "18rem" }}>
        <img
          class="img-thumbnail"
          src="./abogado.jpg"
          alt="Card image cap"
        ></img>
      </div>
      <Info />
      <Star />
    </>
  );
}
