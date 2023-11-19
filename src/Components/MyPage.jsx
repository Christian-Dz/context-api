import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { useState } from "react";


const initialTheme = "light"
const initialLanguage = "es"
const initialAuth = null

const translation = {
    es:{ 
        headerTitle: "Mi aplicacion SIN Context Api",
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
        headerTitle: "My application WITHOUT Context Api",
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


export function MyPage () {
    const [theme, setTheme] = useState(initialTheme)
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translation[language])
    const [auth, setAuth] = useState(initialAuth)


    const handleTheme = (e) => {
        if (e.target.value === "light"){
            setTheme("light")
        } else{
            setTheme("dark")
        }
    }

    const handleLanguage = (e) => {
        if (e.target.value === "es"){
            setLanguage("es")
            setTexts(translation.es)
        } else{
            setLanguage("en")
            setTexts(translation.en)
        }
    }


    const handleAuth = (e) => {
        if (auth){
            setAuth(null)
        } else{
            setAuth(true)
        }
    }

    return (
        <div className="my-page">
            <Header 
            theme={theme} 
            handleTheme={handleTheme} 
            texts={texts} 
            handleLanguage={handleLanguage}
            auth={auth}
            handleAuth={handleAuth}
            />
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts}/>
        </div>
    )
}