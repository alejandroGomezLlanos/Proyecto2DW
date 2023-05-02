import { useState } from "react";
import "../styles.css";

import Card from "../componentes/Card";
import Banner from "../componentes/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <Card />
    </>
  );
}
