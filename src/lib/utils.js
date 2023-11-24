import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFriendsList(messages) {
  return Array.from(
    new Set(
      messages.map((message) => {
        const emailWithoutDomain = getTempNameByEmail(message.sender.uid);

        return JSON.stringify({
          id: message.sender.id,
          uid: message.sender.uid,
          name: emailWithoutDomain,
        });
      })
    ),
    JSON.parse
  );
}

export function getTempNameByEmail(email) {
  const name = email.split("@")[0];

  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function findUserById(id, usersData) {
  const userIndex = usersData.findIndex((user) => user.id === parseInt(id));

  return usersData[userIndex];
}

export function findRoomById(id, roomsList) {
  const roomIndex = roomsList.findIndex((room) => room.id === parseInt(id));

  return roomsList[roomIndex];
}
