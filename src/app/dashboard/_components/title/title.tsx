"use client";

import styled from "styled-components";
import { HEADER_HEIGHT } from "../../generalConstants";

const H2 = styled.h2`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: var(--main-title-color);
    height: ${HEADER_HEIGHT}px;
    border-bottom: 1px solid var(--sidebar-header-border-color);

`;

// 'Montserrat'
export function Title(){
    return <H2>Yes</H2>
};