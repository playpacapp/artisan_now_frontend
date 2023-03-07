
import ContactPage from "@/src/components/contact";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Contact:NextPage=()=>{
    return <DefaultLayout> <ContactPage/></DefaultLayout>
}

export default Contact