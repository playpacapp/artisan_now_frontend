
import HomePage from './home'

export default function Index() {
  return <HomePage/>
}

export async function getStaticProps(locale: string) {
  return {    
    props: {
      messages: (await import(`@/message/en-Us.json`)).default
    }
  };
}