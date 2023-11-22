import {
  ProfileContainer,
  ProfileInfoContainer,
  ProfileInfoItem,
} from "@/components/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const profileData = JSON.parse(localStorage.getItem("profile")).data || null;

  const { uid, email, name, nickname } = profileData;

  console.log(profileData);

  return (
    <ProfileContainer>
      <Avatar className="h-24 w-24 text-6xl">
        <AvatarImage src="/" />
        <AvatarFallback>{uid[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <ProfileInfoContainer>
        <ProfileInfoItem>{name}</ProfileInfoItem>
        <ProfileInfoItem>{nickname}</ProfileInfoItem>
        <ProfileInfoItem>{email}</ProfileInfoItem>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}
