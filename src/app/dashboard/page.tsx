"use client";
import { NotificationPopup } from "./_components/popup-components/notification/notification";
import { SettingPopup } from "./_components/popup-components/setting/setting";
import { useNotificationSettingPopupContext } from "./context/notify-setting-popup";

export default function Home(){
    const { isSettingComOpen, isNotifyComOpen} = useNotificationSettingPopupContext();

    return(
        <div style={{width: "100%", height: "100%"}}>
            <h1>Home</h1>
            {isNotifyComOpen && <NotificationPopup />}
            {isSettingComOpen && <SettingPopup />}
        </div>
    );
}