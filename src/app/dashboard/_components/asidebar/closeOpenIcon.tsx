"use client";
import { IconContainer } from "./asidebar-style";
import { useAsidebarContext } from "../../context/asidebar";

import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";


export function Icon(){
    const { isOpen, dispatch } = useAsidebarContext();
    

    return (
        <IconContainer $isopen={isOpen ? "true" : "false"}>
            {isOpen ? 
                <TfiArrowCircleLeft onClick={() => dispatch({type: "CLOSE"})} className="icon"/> : 
                <TfiArrowCircleRight onClick={() => dispatch({type: "OPEN"})} className="icon open"/>}
        </IconContainer>
        )
};