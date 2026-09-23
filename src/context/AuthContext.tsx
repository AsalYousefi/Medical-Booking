import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type User = {
  fullName: string;
  mobile: string;
  email: string;
  password: string;
};
type AuthContextType = {
  isLogin: boolean;
  isPending: boolean,
  setIsPending: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<User | null>>;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ isLogin, setUser, user, isPending, setIsPending }}>
      {children}
    </AuthContext.Provider>
  );
}
