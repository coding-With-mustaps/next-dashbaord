"use client";
import { useEffect } from "react";
import { useAsidebarContext } from "../../context/asidebar";
import { Container, IconContainer } from "./asidebar-style";
import { Icon } from "./closeOpenIcon";
import { Title } from "../title/title";
import { SidebarLinks } from "../sidebar-links/sidebar-links";

export default function AsideBar(){
    const { isOpen, dispatch} = useAsidebarContext();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            dispatch({type: "CLOSE"});
          }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [dispatch]);

    return(
        <Container $isopen={isOpen ? "true" : "false"}>
            <Icon />
            <Title />
            <SidebarLinks />
        </Container>
    )
};