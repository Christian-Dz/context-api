import { createContext, useState } from "react"



export const AuthContext = createContext()
const initialAuth = null

export function AuthProvider ({children}) {
    const [auth, setAuth] = useState(initialAuth)

    const handleAuth = () => {
        if (auth){
            setAuth(null)
        } else{
            setAuth(true)
        }
    }

    const data = {auth, handleAuth}

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
} 