import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext"
import request from "../utils/request"


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`


export const useLogin = () => {
    const login = (email, password) => 
        request.post(`${baseUrl}/login`, { email, password })
    

    return {
        login
    }
}

export const useRegister = () => {
    const register = (email, password) => 
        request.post(`${baseUrl}/register`, { email, password });
    

    return {
        register
    }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    console.log(accessToken);
    

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };
        request.get(`${baseUrl}/logout`, null,  options)
        .finally(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);
    
    
    return {
        isLoggedOut: !!accessToken,
    }
};