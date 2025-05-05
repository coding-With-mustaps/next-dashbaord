"use client";
import { useEffect } from "react";
import { useAsidebarContext } from "../../context/asidebar";
import { Container, IconContainer } from "./asidebar-style";
import { Icon } from "./closeOpenIcon";

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
            <h1>Aside bar</h1>
        </Container>
    )
};