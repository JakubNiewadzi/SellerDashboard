import React,  {createContext, useContext, useState} from "react";

const GlobalCtx = createContext();

export const ContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const [language, setLanguage] = useState('Polski')

    const toggleTheme = () => {
        setIsDark((prevState) => !prevState);
    }

    const changeLanguage = (nextLanguage) => {
        setLanguage(nextLanguage)
    }

    return (
        <GlobalCtx.Provider value={{ isDark, toggleTheme, language, changeLanguage }}>
            {children}
        </GlobalCtx.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalCtx)
}