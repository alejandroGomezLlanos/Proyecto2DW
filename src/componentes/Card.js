import { useState } from "react";
import "../styles.css";

export default function Card({ data }) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src="./uao.png" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
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
