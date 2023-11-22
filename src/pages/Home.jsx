import { useComponentContext } from "@/store/contexts/componentContext";
import { getTempNameByEmail } from "@/lib/utils";

import {
  HomeBody,
  HomeContainer,
  HomeHeader,
  ProductContainer,
} from "@/components/home";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users2 } from "lucide-react";

export default function Home() {
  const { toggleCreateChat, toggleCreateRoom, isCreateRoomOpen } =
    useComponentContext();
  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  const name = getTempNameByEmail(profile.uid);

  return (
    <HomeContainer>
      <HomeHeader>
        <h1 className="text-2xl font-medium">Welcome, {name}</h1>
        <h2>Ready? Let's jump into things</h2>
      </HomeHeader>
      <HomeBody>
        <ProductContainer>
          <MessageSquare size={48} strokeWidth={1} />
          <p>Send a message to a friend</p>
          <Button onClick={toggleCreateChat}>Start Chat</Button>
        </ProductContainer>
        <ProductContainer>
          <Users2 size={48} strokeWidth={1} />
          <p>Collaborate in a room</p>
          <Button onClick={toggleCreateRoom}>Create Room</Button>
        </ProductContainer>
      </HomeBody>
    </HomeContainer>
  );
}
