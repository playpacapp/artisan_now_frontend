
import DigitalPage from "@/src/components/static/digital";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Digital:NextPage=()=>{
    return <DefaultLayout> <DigitalPage/></DefaultLayout>
}

export default Digital

export async function getStaticProps(locale: string) {
  return {    
    props: {
      messages: (await import(`@/message/en-Us.json`)).default
    }
  };
}