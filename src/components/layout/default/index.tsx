import React from "react"
import Header from "../../header"
import Footer from "../../footer"

export const DefaultLayout:React.FC<React.PropsWithChildren>=({children})=>{
    return <div className="default-layout w-full relative max-w-[1920px]">
        <Header/>
        {children}
        <Footer/>
    </div>
}