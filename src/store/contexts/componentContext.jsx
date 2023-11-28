import React, { useState, useContext } from "react";

const ComponentContext = React.createContext();

export default function ComponentProvider({ children }) {
  const [isCreateChatOpen, setIsCreateChatOpen] = useState(false);
  const [isCreateRoomOpen, setIsCreateRoomOpen] = useState(false);

  function toggleCreateChat() {
    setIsCreateChatOpen(!isCreateChatOpen);
  }

  function toggleCreateRoom() {
    setIsCreateRoomOpen(!isCreateRoomOpen);
  }

  const value = {
    isCreateChatOpen,
    isCreateRoomOpen,
    toggleCreateChat,
    toggleCreateRoom,
  };

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
}

export function useComponentContext() {
  return useContext(ComponentContext);
}
