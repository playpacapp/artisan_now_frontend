import React from "react"
import Header from "../../header"
import Footer from "../../footer"

export const DefaultLayout:React.FC<React.PropsWithChildren>=({children})=>{
    return <div className="default-layout">
        <Header/>
        {children}
        <Footer/>
    </div>
}