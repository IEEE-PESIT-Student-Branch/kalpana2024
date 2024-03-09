import {createContext,useEffect,useReducer} from 'react'

export const UserContext = createContext()

export const userReducer = (state,action) => {
    console.log("userReducer")
    switch(action.type){
        case 'LOGIN':
            console.log("UserContext : LOGIN")
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
}

export const UserContextProvider = ({children}) => {
    console.log("UserContextProvider")
    const [state,dispatch] = useReducer(userReducer,{
        user: null
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({type : 'LOGIN' ,payload :user})
        }
    },[])
    console.log('UserContext state: ',state)
    return(
        <UserContext.Provider value={{...state,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}