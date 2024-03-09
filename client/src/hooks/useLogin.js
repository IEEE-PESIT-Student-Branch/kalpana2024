import {useState} from 'react'
import {UseUserContext} from './useUserContext'

export const UseLogin = () => {
    console.log("UseLogin")
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = UseUserContext()
    const login = async (teamName,memEmail) => {
        setIsLoading(true)
        setError(null)
        console.log("UseLogin  "+teamName+"     "+memEmail)
        const response = await fetch('/api/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"team_name":teamName,"mem_email":memEmail})
        })
        console.log(response);
        const json = await response.json()
        console.log(json)
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            console.log("LOGIN SUCCESSFUL:")
            console.log(json)
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
    }
    return {login,isLoading,error}
}