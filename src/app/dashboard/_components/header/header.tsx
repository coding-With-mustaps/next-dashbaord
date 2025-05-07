"use client";
import { useAsidebarContext } from "../../context/asidebar";
import { ProfileImage } from "../profile-image/profile-image";
import { Container, NotifyButton, VerticalLine, Wrapper } from "./header-style";
import { IoMdNotificationsOutline } from "react-icons/io";


export default function Header(){
    const { isOpen } = useAsidebarContext();
    return(
        <Container $isopen={isOpen ? "true" : "false"}>
            {/* <Wrapper></Wrapper> */} 
            <Wrapper className="s-wrapper-notify">
                <div className="notification-secion">
                    <NotifyButton><IoMdNotificationsOutline className="notifiy-icon"/></NotifyButton>
                </div>
                <VerticalLine></VerticalLine>
                <div className="username-section">
                    <p>username</p>
                    <ProfileImage />
                </div>
            </Wrapper>
        </Container>
    )
};