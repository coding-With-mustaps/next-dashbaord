"use client";
import { styled } from "styled-components";
import { ASIDEBAR_WIDTH, HEADER_HEIGHT } from "../../generalConstants";

type Props = {
    $isopen: "true" | "false"
};

// TODO: justify-content: space-between; if the container contains two wrapper else flex-end
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
    justify-content: flex-end; 
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    .username-section {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

export const VerticalLine = styled.div`
    border-right: 2px solid #ccc;
    padding-right: 10px;
    height: 30px;
`

export const NotifyButton = styled.button`
    padding: 5px;
    border-radius: 4px;
    background-color: #ccc;

    .notifiy-icon {
        font-size: 25px;
    }
`