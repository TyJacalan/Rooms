import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFriendsList(messages) {
  return Array.from(
    new Set(
      messages.map((message) => {
        const emailWithoutDomain = message.sender.uid.split("@")[0];

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

export function findUserById(id, usersData) {
  const userIndex = usersData.findIndex((user) => user.id === parseInt(id));

  return usersData[userIndex];
}
