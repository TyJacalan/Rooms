// import { cache } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

export default function RoomBody() {
  const { classId, roomId } = useParams();
  const { retrieveMessagesAction } = useMessagesContext();

  // const receiverMessages = cache(
  //   retrieveMessagesAction({
  //     receiver_id: roomId,
  //     class_id: classId,
  //   })
  // );

  return <div>roomBody</div>;
}
