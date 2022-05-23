import React from "react";

const style = {
  background: "red",
  padding: "5px",
  margin: "5px",
  border: "1px solid gray",
  cursor: "move",
};

export interface CardProps {
  id: string;
  name: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { id, name } = props;
  return <div style={style}>{`${id}--${name}`}</div>;
};

export default Card;
