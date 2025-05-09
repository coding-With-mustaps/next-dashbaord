"use client";
import { styled } from "styled-components";
import { ASIDEBAR_WIDTH, HEADER_HEIGHT } from "../../generalConstants";
import { media } from "@/Global_properties/MediaQuery";

type Props = {
    $isopen: "true" | "false"
};

// TODO: justify-content: space-between; if the container contains two wrapper else flex-end
export const Container = styled.div<Props>`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${HEADER_HEIGHT}px;
    background-color: var(--sidebar-header-background);
    color: var(--main-color);
    border-bottom: 1px solid var(--sidebar-header-border-color);                                                   // 40px paddingLeft with sidebar is close because of open icon
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

    .notification-secion {
       display: flex;
       gap: 10px;
       align-items: center;
    }

    .username-section {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

export const VerticalLine = styled.div`
    border-right: 2px solid var(--verticalbar-line-color);
    padding-right: 10px;
    height: 30px;
`

export const NotifyButton = styled.button`
    padding: 5px;
    border-radius: 4px;
    background-color: var(--icons-background);

    .notify-icon {
        font-size: 25px;
        color: var(--icons-color);
    }

    @media ${media.mobile} {
        .notify-icon {
            font-size: 20px;
        }
    }
`