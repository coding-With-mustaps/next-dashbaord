"use client";
import { styled } from "styled-components";
import { ASIDEBAR_WIDTH, HEADER_HEIGHT } from "../../generalConstants";

type Props = {
    $isopen: "true" | "false"
};

export const Container = styled.div<Props>`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${HEADER_HEIGHT}px;
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #eaeaea;                                                   // 40px paddingLeft with sidebar is close because of open icon
    padding-left: ${({ $isopen }) => $isopen === "true" ? `${ASIDEBAR_WIDTH + 20}px` : `40px`}; // 255px is the width of the aside bar

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;