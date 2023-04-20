import { useState } from "react";
import { useEffect } from "react";

import "../styles.css";

import Card from "../componentes/Card";

const get = async () => {
  const url = `https://jsonplaceholder.typicode.com/todos/`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      completed: img.completed
    };
  });
  return gifs;
};

export default function Get() {
  return (
    <>
      <h1> hola mundo </h1>
      <Card Card={gifs} />
    </>
  );
}
