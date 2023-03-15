
import HomePage from "@/src/components/home";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Home:NextPage=()=>{
    return <DefaultLayout> <HomePage/></DefaultLayout>
}

export default Home