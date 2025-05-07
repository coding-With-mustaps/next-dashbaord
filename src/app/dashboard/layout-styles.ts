"use client";
import styled from "styled-components";
import { ASIDEBAR_WIDTH, HEADER_HEIGHT } from "./generalConstants";

type Props = {
    $isopen: "true" | "false"
}

export const Wrapper = styled.main<Props>`
    width: 100%;
    height: 100vh;
    padding-right: 5px;
    padding-left: ${({ $isopen }) => $isopen === "true" ? `${ASIDEBAR_WIDTH + 10}px` : "10px"};
    padding-top: ${HEADER_HEIGHT + 5}px;
    padding-bottom: 5px;
    background: var(--main-content-background);
    color: #333;
`