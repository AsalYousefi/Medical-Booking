import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export type User = {
    fullName: string,
    mobile: string,
    email: string,
    password: string
}
type AuthContextType = {
    isLogin: boolean,
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    setUser: Dispatch<SetStateAction<User>>,
    user: User
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthContextProvider({children}: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null)
    const [isLogin, setIsLogin] = useState<boolean>(false)
    
    return (
        <AuthContext.Provider value={{isLogin, setIsLogin, setUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}