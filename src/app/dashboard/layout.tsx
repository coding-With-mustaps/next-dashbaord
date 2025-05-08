import AsideBar from "./_components/asidebar/asidebar";
import Header from "./_components/header/header";
import { AsideBarContextProvider } from "./context/asidebar";
import { NotificationSettingPopupContextProvider } from "./context/notify-setting-popup";
import { MainWrapper } from "./utils/childrenMainWrapper";

export const metadata = {
    title: "Yes booking dashboard",
    description: "Yes booking dashboard",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>){
    return(
        <AsideBarContextProvider>
            <NotificationSettingPopupContextProvider>
                <Header />
                <AsideBar />
                {/* <MainWrapper children={children} /> */}
                <MainWrapper>
                    { children }
                </MainWrapper>
            </NotificationSettingPopupContextProvider>
        </AsideBarContextProvider>
    )
};