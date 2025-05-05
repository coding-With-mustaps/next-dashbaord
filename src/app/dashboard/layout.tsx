import AsideBar from "./_components/asidebar/asidebar";
import Header from "./_components/header/header";
import { AsideBarContextProvider } from "./context/asidebar";

export const metadata = {
    title: "Yes booking dashboard",
    description: "Yes booking dashboard",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>){
    return(
        <AsideBarContextProvider>
            <Header />
            <AsideBar />
            { children }
        </AsideBarContextProvider>
    )
};