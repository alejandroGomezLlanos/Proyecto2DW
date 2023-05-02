import { useState } from "react";
import "../styles.css";

export default function Card(gifs) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img
          class="img-thumbnail"
          src="./abogado.jpg"
          alt="Card image cap"
        ></img>
        <div class="card-body">
          <h5 class="card-title">{gifs.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
