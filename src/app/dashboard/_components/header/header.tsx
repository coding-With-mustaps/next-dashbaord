"use client";
import { useAsidebarContext } from "../../context/asidebar";
import { ProfileImage } from "../profile-image/profile-image";
import { Container, Wrapper } from "./header-style";


export default function Header(){
    const { isOpen } = useAsidebarContext();
    return(
        <Container $isopen={isOpen ? "true" : "false"}>
            <Wrapper>
                <h1>Header</h1>
                <h1>Header2</h1>
            </Wrapper>
            <Wrapper>
                <small>Mustapha11</small>
                <ProfileImage />
            </Wrapper>
        </Container>
    )
};