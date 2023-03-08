import React from "react"
import Header from "../../common/header"
import Footer from "../../common/footer"

export const DefaultLayout:React.FC<React.PropsWithChildren>=({children})=>{
    return <div className="default-layout w-full relative max-w-[1920px] mx-auto">
        <Header/>
        {children}
        <Footer/>
    </div>
}