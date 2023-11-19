



export function Main ({theme, texts, auth}){
    return (
        <main className={theme}>
            {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcom}</p>} 
            <p>{texts.mainContent}</p>
        </main>
    )
}
