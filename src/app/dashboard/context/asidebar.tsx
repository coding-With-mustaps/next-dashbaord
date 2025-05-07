"use client";
import { createContext, useContext, useReducer } from "react";


type asidebarState = {
    isOpen: boolean
};

type AsidebarContextType = asidebarState & {
    dispatch: React.Dispatch<any>;
};

type Props = {
    children: React.ReactNode;
};

const initialState = {
    isOpen: true
};

const asidebarContext = createContext<AsidebarContextType | null>(null);

const reducer = (state: asidebarState, action: {type: "OPEN" | "CLOSE"}) => {
    switch(action.type){
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

    return <asidebarContext.Provider value={{...state, dispatch}}>
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