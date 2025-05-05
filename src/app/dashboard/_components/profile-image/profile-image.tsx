import Image from "next/image";
import { Container } from "./profile-image.style";

export function ProfileImage(){
    return(
        <Container>
            <Image src="/profile.jpg" width="50" height="50" alt="profile image"/>
        </Container>
    )
};