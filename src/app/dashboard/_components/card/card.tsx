"use client"
import React from "react";
import styled from "styled-components"
import { FaRegFolderClosed, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { FaCentSign } from "react-icons/fa6";
import { RiAddBoxLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { media } from "@/Global_properties/MediaQuery";

// TODO: I need to change these to parallel routes
// TODO: to able to catch up errors, load data and more seperately

// Styled Components
const Card = styled.div`
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

const CardContent = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #1f2937;
`;

const Button = styled.button`
  background-color: var(--card-icon-bg);
  color: var(--card-icon-color);
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: var(--card-icon-bg);
`;

type PropsTypes = {
    currentRevenue: number,
    yesterdayRevenue: number
}

export function CardRevenueContainer({ currentRevenue, yesterdayRevenue }: PropsTypes) {

  return (
    <Card>
        <div className="flex items-center gap-2">
            <Button><FaRegFolderClosed className="text-white text-lg" /></Button>
            <CardHead>Today Total Revenue</CardHead>
        </div>
        <CardContent>&cent;{currentRevenue}</CardContent>
        <div className="flex items-center gap-2">
            <Paragraph>yest. vs today</Paragraph>
            {currentRevenue >= yesterdayRevenue ? (
            <FaArrowTrendUp className="text-green-500" />
            ) : (
            <FaArrowTrendDown className="text-red-500" />
            )}
        </div>
    </Card>
  );
};

type TransactionTypes = {
  todaysTranction: number, 
  previousTransaction: number
}

export function CardTransactionContainer({ todaysTranction, previousTransaction }: TransactionTypes) {
  return (
    <Card>
        <div className="flex items-center gap-2">
            <Button><RiAddBoxLine className="text-white text-lg" /></Button>
            <CardHead>Today transactions</CardHead>
        </div>
        <CardContent>&cent;{todaysTranction}</CardContent>
        <div className="flex items-center gap-2">
            <Paragraph>yest. vs today</Paragraph>
            {todaysTranction >= previousTransaction ? (
            <FaArrowTrendUp className="text-green-500" />
            ) : (
            <FaArrowTrendDown className="text-red-500" />
            )}
        </div>
    </Card>
  );
};

type VisitorsTypes = {
  todayTotalVisitors: number,
  previousTotalVisitors: number
}

export function CardTotalVisitorsContainer({ todayTotalVisitors, previousTotalVisitors }: VisitorsTypes) {

  return (
    <Card>
        <div className="flex items-center gap-2">
            <Button><RiTeamLine className="text-white text-lg" /></Button>
            <CardHead>Today Total Visitors</CardHead>
        </div>
        <CardContent>{todayTotalVisitors}</CardContent>
        <div className="flex items-center gap-2">
            <Paragraph>yest. vs today</Paragraph>
            {todayTotalVisitors >= previousTotalVisitors ? (
            <FaArrowTrendUp className="text-green-500" />
            ) : (
            <FaArrowTrendDown className="text-red-500" />
            )}
        </div>
    </Card>
  );
};

type PropertiesTypes = {
  totalProperties: number
}

export function CardTotalPropertiesContainer({ totalProperties }: PropertiesTypes) {
  return (
    <Card>
        <div className="flex items-center gap-2">
            <Button><HiOutlineHomeModern className="text-white text-lg" /></Button>
            <CardHead>Total Properties</CardHead>
        </div>
        <CardContent>{totalProperties}</CardContent>
        <div className="flex items-center gap-2">
           <small className="text-green-500">approved:{20}</small>~~<small className="text-red-500">unapproved:{40}</small>
        </div>
    </Card>
  );
};