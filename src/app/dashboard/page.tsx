"use client";
import styled from "styled-components";
import { CardRevenueContainer, CardTotalPropertiesContainer, CardTotalVisitorsContainer, CardTransactionContainer } from "./_components/card/card";
import { NotificationPopup } from "./_components/popup-components/notification/notification";
import { SettingPopup } from "./_components/popup-components/setting/setting";
import { useNotificationSettingPopupContext } from "./context/notify-setting-popup";
import { media } from "@/Global_properties/MediaQuery";

const CardsContainer = styled.div`
    @media ${media.mobile} {
        justify-content: center;
        align-items: center;
    }
`

export default function Home(){
    const { isSettingComOpen, isNotifyComOpen} = useNotificationSettingPopupContext();

    return(
        <div style={{width: "100%", height: "100%"}}>
            {isNotifyComOpen && <NotificationPopup />}
            {isSettingComOpen && <SettingPopup />}

            <CardsContainer className="flex flex-wrap gap-3">
                <CardRevenueContainer currentRevenue={10} yesterdayRevenue={190} />
                <CardTransactionContainer todaysTranction={1502} previousTransaction={1800} />
                <CardTotalVisitorsContainer todayTotalVisitors={200} previousTotalVisitors={22}/>
                <CardTotalPropertiesContainer totalProperties={333} />
            </CardsContainer>
        </div>
    );
}