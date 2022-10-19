import React from "react";
import { useParams } from "react-router-dom";
import Records from "../../server.json";

export default function ProductDetail() {
  const { id, itemID } = useParams();
  if (itemID) {
    Records.find((item) => item.id === itemID);
  }  
  
  console.log(typeof itemID);
  return (
    <>
      <div>{itemID}</div>

      {Records.filter((item) => item.id == itemID).map((item) => (
        <div key={item.id}>
          <div>Day la hinh {item.title}</div>
        </div>
      ))}
    </>
  );
}
