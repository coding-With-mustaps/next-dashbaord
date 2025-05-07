"use client"
import { useAsidebarContext } from "../context/asidebar"
import { Wrapper } from "../layout-styles"

// TODO: In other not to convert the main layout to client component
// TODO: I extract the children wrapper to this component
export function MainWrapper({ children }: {children: React.ReactNode}){
    const { isOpen } = useAsidebarContext(); //? client action code
    return <Wrapper $isopen={isOpen ? "true": "false"}>{ children }</Wrapper>
};