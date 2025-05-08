"use client"
import { createContext, useContext, useReducer } from "react";
import { NotifySettingAction } from "../utils/constants";
// TODO: This context is to manage the setting and notification popup

type StateTypes = {
    isNotifyComOpen: boolean,
    isSettingComOpen: boolean
};

type ContextType = StateTypes & {
    dispatch: React.Dispatch<any>;
};

type ActionTypes = {
    type: "OPEN-NOTIFICATION" | "CLOSE-NOTIFICATION" | "OPEN-SETTING" | "CLOSE-SETTING"
};

const initialState: StateTypes = {
    isNotifyComOpen: false,
    isSettingComOpen: false
};

const notificationSettingContext = createContext<ContextType | null>(null);

const reducer = (state: StateTypes, action: ActionTypes) => {
    switch(action.type){
        case NotifySettingAction.OPEN_NOTIFICATION:
            return {...state, isNotifyComOpen: true}

        case NotifySettingAction.CLOSE_NOTIFICATION:
            return {...state, isNotifyComOpen: false}

        case NotifySettingAction.OPEN_SETTING:
            return {...state, isSettingComOpen: true}

        case NotifySettingAction.CLOSE_SETTING:
            return {...state, isSettingComOpen: false}
        default: 
            return state;
    }
};

type Props = {
    children: React.ReactNode
}

export function NotificationSettingPopupContextProvider({ children }: Props){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <notificationSettingContext.Provider value={{...state, dispatch}}>
            { children }
        </notificationSettingContext.Provider>
    )
};

export function useNotificationSettingPopupContext(){
    const context = useContext(notificationSettingContext);

    if(!context){
        throw new Error("notificationSettingContext must be use within NotificationSettingPopupContextProvider")
    };

    return context;
};