



export function Main ({theme, texts}){
    return (
        <main className={theme}> 
            <p>{texts.mainWelcom}</p>  
            <p>{texts.mainHello}</p>  
            <p>{texts.mainContent}</p>
        </main>
    )
}
