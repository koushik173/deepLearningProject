import React, { createContext, useState} from 'react';

export const TopDisContext = createContext();

export const TopDisProvider = ({ children }) => {
    const [selectTopDis, setSelectTopDis]= useState([]);
    return(
        <TopDisContext.Provider value={{selectTopDis, setSelectTopDis}}>{children}</TopDisContext.Provider>
    )
}