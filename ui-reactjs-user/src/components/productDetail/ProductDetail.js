import React from "react";
import { useParams } from "react-router-dom";
import Records from "../../server.json";
import NotFound from "../notFound/NotFound";

export default function ProductDetail() {
  const { id, itemID } = useParams();
  const thisProduct = itemID
    ? Records.find((item) => item.id === itemID)
    : null;

  return <div>ProductDetail</div>;
}
