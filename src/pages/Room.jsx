import React from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const { classId, roomId } = useParams();

  return <div>Room</div>;
}
