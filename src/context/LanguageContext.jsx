import { createContext, useState } from "react"



export const LanguageContext = createContext()
const initialLanguage = "es"

const translation = {
    es:{ 
        headerTitle: "Mi aplicacion CON Context Api",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"},
    en:{
        headerTitle: "My application WITH Context Api",
        headerSubtitle: "My Header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Close Session",
        mainWelcome: "Welcome",
        mainHello: "Hello user",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}

export function LanguageProvider ({children}) {
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translation[language])

    const handleLanguage = (e) => {
        if (e.target.value === "es"){
            setLanguage("es")
            setTexts(translation.es)
        } else{
            setLanguage("en")
            setTexts(translation.en)
        }
    }

    const data = {texts, handleLanguage}

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
} 