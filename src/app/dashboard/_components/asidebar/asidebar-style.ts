"use client";
import styled from "styled-components";
import { ASIDEBAR_WIDTH } from "../../generalConstants";

type Props = {
    $isopen: "true" | "false"
};

export const Container = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: ${ASIDEBAR_WIDTH}px;
    height: 100vh;
    background-color: var(--sidebar-header-background);
    color: #333;
    border-right: 1px solid var(--sidebar-header-border-color);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transform: translateX(${({ $isopen }) => ($isopen === "true" ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
`;

export const IconContainer = styled.div<Props>`
    position: absolute;
    top: 18px;
    right: ${({ $isopen }) => ($isopen === "true" ? "-10px" : "-30px")};
    cursor: pointer;
    color: var(--close-open-asidebar-icon);
    transition: color 0.3s ease;

    &:hover {
        color: #0070f3;
    }

    .icon {
        font-size: 24px;
        font-weight: bold;
    }
`;