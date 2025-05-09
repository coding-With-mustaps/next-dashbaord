"use client"
import { media } from "@/Global_properties/MediaQuery";
import { styled } from "styled-components";


export const Container = styled.div`
    padding-right: 5px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    @media ${media.mobile} {
        img {
            width: 40px;
            height: 40px;
        }
    }
`;