export async function getStaticProps(locale: string) {
    return {    
      props: {
        messages: (await import(`@/message/en-Us.json`)).default
      }
    };
}