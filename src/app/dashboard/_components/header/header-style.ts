"use client";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #eaeaea;
    padding-left: 255px; // 255px is the width of the aside bar

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;