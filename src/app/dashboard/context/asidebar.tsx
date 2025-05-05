"use client";
import { createContext, useContext, useReducer } from "react";

type AsidebarContextType = {
    isOpen: boolean;
    dispatch?: React.Dispatch<any>;
};

type Props = {
    children: React.ReactNode;
};

const initialState = {
    isOpen: false
};

const asidebarContext = createContext<AsidebarContextType | null>(null);

const reducer = (state: AsidebarContextType, action: string) => {
    switch(action){
        case 'OPEN':
            return { isOpen: true };
        case 'CLOSE':
            return { isOpen: false };
        default:
            return state;
    }
};

export const AsideBarContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <asidebarContext.Provider value={{dispatch, ...state}}>
        { children }
    </asidebarContext.Provider>
};

export const useAsidebarContext = () => {
    const context = useContext(asidebarContext);
    if (context === null) {
        throw new Error("useAsidebarContext must be used within an AsideBarContextProvider");
    }
    return context;
};