
import ContactPage from "@/src/components/static/contact";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Contact:NextPage=()=>{
    return <DefaultLayout> <ContactPage/></DefaultLayout>
}

export default Contact