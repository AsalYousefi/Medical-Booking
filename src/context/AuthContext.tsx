import { createContext, PropsWithChildren, ReactNode, useState } from "react";

type AuthContextType = {
    isLogin: boolean,
    login: (userName: string, password: string) => void
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthContextProvider({children}: PropsWithChildren) {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    function login(userName: string, password: string){
        console.log(userName + password)
        setIsLogin(prev => !prev)
    }
    return (
        <AuthContext.Provider value={{isLogin, login}}>
            {children}
        </AuthContext.Provider>
    )
}