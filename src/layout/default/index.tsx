import React from "react"

export const DefaultLayout:React.FC<React.PropsWithChildren>=({children})=>{
    return <div className="default-layout">
        <header> this is header</header>
        {children}
        <footer>
            this is footer
        </footer>
    </div>
}