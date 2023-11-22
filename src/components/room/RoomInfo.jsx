import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useMessagesContext } from "@/store/contexts/messagesContext";
import { findUserById } from "@/lib/utils";

import SimpleLoader from "@/components/shared/simpleLoader";
import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileInfoItem,
} from "@/components/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const initialState = {
  name: null,
  ownerName: null,
  members: [],
};

export default function RoomInfo() {
  const { roomId } = useParams();
  const { usersList, roomData, getRoomsDetailsAction } = useMessagesContext();
  const [roomDetails, setRoomDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getRoomDetails() {
      setIsLoading(true);
      await getRoomsDetailsAction(roomId);

      if (Object.keys(roomData).length > 0) {
        const members = roomData.channel_members.map((member) =>
          findUserById(member.user_id, usersList)
        );

        const owner = findUserById(roomData.owner_id, usersList);

        setRoomDetails((prevState) => ({
          ...prevState,
          name: roomData.name,
          ownerName: owner.uid,
          members: members,
        }));
      }

      setIsLoading(false);
    }

    getRoomDetails();
  }, [roomId]);

  const { name, ownerName, members } = roomDetails;

  console.log(isLoading);

  return (
    <ProfileContainer>
      {isLoading || !name || !ownerName || !members ? (
        <SimpleLoader />
      ) : (
        <>
          <Avatar className="h-24 w-24 text-6xl">
            <AvatarImage src="/" />
            <AvatarFallback className="bg-zinc-900 dark:bg-zinc-700 text-zinc-50">
              {name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <ProfileInfoContainer>
            <h1 className="text-3xl">{name}</h1>
            <ProfileInfoItem>
              <span className="text-zinc-400">Owned By</span>
              <div>{ownerName}</div>
            </ProfileInfoItem>
            <ProfileInfoItem>
              <span className="text-zinc-400">Members</span>
              {members.length > 0 &&
                members.map((member) => (
                  <div key={member.id}>{member.uid}</div>
                ))}
            </ProfileInfoItem>
          </ProfileInfoContainer>
        </>
      )}
    </ProfileContainer>
  );
}
