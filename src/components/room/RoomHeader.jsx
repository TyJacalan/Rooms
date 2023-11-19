import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useMessagesContext } from "@/store/contexts/messagesContext";

import { findUserById } from "@/lib/utils";

import { RoomHeaderIcon, RoomHeaderProfile } from "./";

export default function RoomHeader() {
  const { classId, roomId } = useParams();
  const { roomData } = useMessagesContext();
  const [receiverData, setReceiverData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(null);

  // useEffect(() => {
  //   if (usersList.length > 0) {
  //     const fetchReceiverData = async () => {
  //       try {
  //         setIsLoading(true);
  //         const data = await findUserById(roomId, usersList);

  //         if (data) {
  //           setReceiverData(data);
  //         } else {
  //           setToastMessage("User could not be found");
  //           setHasError(true);
  //         }
  //       } catch (error) {
  //         setToastMessage(error);
  //         setHasError(true);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchReceiverData();
  //   }
  // }, [roomId, usersList]);

  return (
    <div className="flex flex-row items-center justify-center py-2">
      <RoomHeaderIcon />
      <RoomHeaderProfile />
    </div>
  );
}
