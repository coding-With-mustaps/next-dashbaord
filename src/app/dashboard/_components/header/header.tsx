"use client";
import { useAsidebarContext } from "../../context/asidebar";
import { useNotificationSettingPopupContext } from "../../context/notify-setting-popup";
import { NotifySettingAction } from "../../utils/constants";
import { ProfileImage } from "../profile-image/profile-image";
import { Container, NotifyButton, VerticalLine, Wrapper } from "./header-style";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


export default function Header(){
    const { isOpen } = useAsidebarContext();
    const context = useNotificationSettingPopupContext();

    return(
        <Container $isopen={isOpen ? "true" : "false"}>
            {/* <Wrapper></Wrapper> */} 
            <Wrapper className="s-wrapper-notify">
                <div className="notification-secion">
                    <NotifyButton onClick={() => context?.dispatch({type: NotifySettingAction.OPEN_SETTING})}><IoSettingsOutline className="notifiy-icon"/></NotifyButton>
                    <NotifyButton onClick={() => context?.dispatch({type: NotifySettingAction.OPEN_NOTIFICATION})}><IoMdNotificationsOutline className="notifiy-icon"/></NotifyButton>
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