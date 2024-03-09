import {UseUserContext} from './useUserContext'

export const UseLogout = () => {
    const {dispatch} = UseUserContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}