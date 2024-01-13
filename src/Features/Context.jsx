import { createContext,useReducer } from "react";

export const Context = createContext()

const InitialState = []
const Reducer = (state,action)=>{
if(action.type === "AddTasks"){
    return [...state,action.payload]
}else if(action.type === "AddBoard"){
    return [...state,action.payload]

}else{
    return state
}
}

const ContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(Reducer, InitialState)

    return(
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider