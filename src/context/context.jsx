import { createContext, useState } from "react";
import run from "../config/gemini";

export const context=createContext();

const ContextProvider=(props)=>{

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [previousPrompts,setPreviousPrompts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");

    const onSent = async(prompt)=>{
       await run(input);
    }

    


    const contextValue={
        previousPrompts,
        setPreviousPrompts,
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData
    }

    return(
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;