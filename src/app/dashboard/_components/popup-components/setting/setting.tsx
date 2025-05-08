"use client";
import { useNotificationSettingPopupContext } from "@/app/dashboard/context/notify-setting-popup";
import { RiCloseLargeFill } from "react-icons/ri";
import { NotifySettingAction } from "@/app/dashboard/utils/constants";
import { CloseButtonIcon, Container, Wrapper } from "../shared-styles"; //TODO: sharing code with other components

export function SettingPopup(){
    const context = useNotificationSettingPopupContext();

    return(
        <Container $isvisible={context?.isSettingComOpen}>
            <Wrapper>
                <h1>Setting</h1>
                <CloseButtonIcon onClick={() => context?.dispatch({type: NotifySettingAction.CLOSE_SETTING})}><RiCloseLargeFill className="icon"/></CloseButtonIcon>
            </Wrapper>
        </Container>
    )
};