import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";



export function FooterContext (){
    const {theme} = useContext(ThemeContext)
    const {texts} = useContext(LanguageContext)

    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
    )
}