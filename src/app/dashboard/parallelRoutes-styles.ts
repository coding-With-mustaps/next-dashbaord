"use client"
import styled from "styled-components"
import { FaRegFolderClosed, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { FaCentSign } from "react-icons/fa6";
import { RiAddBoxLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";

import { media } from "@/Global_properties/MediaQuery";

// TODO: I need to change these to parallel routes
// TODO: to able to catch up errors, load data and more seperately

// Styled Components
export const Card = styled.div`
  width: 230px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  @media ${media.mobile} {
    width: 90%;
  }
`;

export const CardHead = styled.h2`
  font-size: 16px;
  color: #333;
  font-weight: 500;
  width: fit-content;
`;

export const CardContent = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #1f2937;
`;

export const Button = styled.button`
  background-color: var(--card-icon-bg);
  color: var(--card-icon-color);
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: var(--card-icon-bg);
`;