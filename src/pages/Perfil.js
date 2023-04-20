import { useState } from "react";
import "../styles.css";

import Banner from "../componentes/Banner";
import Info from "../componentes/Info";
import Star from "../componentes/Star";

export default function Perfil() {
  return (
    <>
      <Banner />
      <Info />
      <Star />
    </>
  );
}
