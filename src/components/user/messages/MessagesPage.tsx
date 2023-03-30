import { useTranslations } from "next-intl";
import Image from "next/image"

import { Button, Wrapper } from "../../ui";

const messages = [
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id:"02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
]

export function MessagesPage() {
  const t = useTranslations("user.messages");
  return (
    <>
      <Wrapper>
        <div className="p-0 flex flex-row">
          <div className="w-full items-start justify-center message-channel">
            <div className="relative flex flex-col h-full">
              <div className="flex flex-row header">
                <h3>Messages</h3>
              </div>
              <div className="flex flex-col list">
                {messages && messages.map((item, key) => {
                  return (
                    <div key={key} id={item.id} className="flex flex-row items-center item">
                      <Image className="rounded-[50px] w-[48px] h-[48px]" src="/hero.jpg" width={48} height={48} alt="" />
                      <div className="flex flex-col ml-5">
                        <h5>{item.username}</h5>
                        <span>{item.message}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="relative w-full items-start justify-center message-content">
            <div className="relative flex flex-col h-full">
              <div className="flex flex-row header">
                <h3>username</h3>
              </div>
              <div className="flex flex-col content">
                
              </div>
              <div className="flex flex-row w-full chat gap-5">
                <input className="border border-gray-400 rounded-xl w-full" type="text" value=""/>
                <Button label="Send"/>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
