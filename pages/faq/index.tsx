
import FAQPage from "@/src/components/faq";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Faq:NextPage=()=>{
    return <DefaultLayout> <FAQPage/></DefaultLayout>
}

export default Faq

export async function getStaticProps(locale: string) {
    return {    
      props: {
        messages: (await import(`@/message/en-Us.json`)).default
      }
    };
  }