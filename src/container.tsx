import React, { useState } from "react";
import Card from "./card";
const style = {
  width: 300,
};

export default function Container() {
  const [data, setData] = useState([
    {
      id: "1",
      name: "卡片",
    },
    {
      id: "2",
      name: "卡片",
    },
    {
      id: "3",
      name: "卡片",
    },
  ]);
  return (
    <div style={style}>
      {data.map((item) => (
        <Card key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
}
