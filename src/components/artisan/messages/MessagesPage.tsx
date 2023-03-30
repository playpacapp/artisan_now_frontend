import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";

import { Button, Wrapper } from "../../ui";

const messages = [
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
    username: "Daniel",
    message: "efweijo fjweoijfweo"
  },
  {
    id: "02",
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
          <div className="w-full message-channel">
            <div className="relative flex flex-col h-full">
              <div className="flex flex-row items-center header">
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
              <div className="flex flex-row justify-between header">
                <h3>username</h3>
                <Button label="Ayuda" />
              </div>
              <div className="flex flex-col content">
                <div className="flex flex-row items-start mt-5 ">
                  <Image className="rounded-[50px] w-[48px] h-[48px] mt-[10px]" src="/hero.jpg" width={48} height={48} alt="" />
                  <div className="w-full flex flex-col ml-5">
                    <div className="flex flex-row gap-5 items-center">
                      <Link className="underline text-xl text-600" href="">username</Link>
                      <span className="light">3/23/2023 18:13</span>
                    </div>
                    <div className="flex flex-col">
                      <p>In the message tab, the artisan can communicate with the administration and can answer direct questions from users who are interested in their experiences.</p>
                      <p>in tab 3 you can see the active and pending experiences within the reservations sub-tab</p>
                      <p>And in the history subtab is where you can select in the calendar the type of experiences you want to consult with the date range and see the total of your sales, you can also see the total income in your account and the history of movements</p>
                    </div>

                  </div>
                </div>
                <div className="flex flex-row items-start mt-5 ">
                  <Image className="rounded-[50px] w-[48px] h-[48px] mt-[10px]" src="/hero.jpg" width={48} height={48} alt="" />
                  <div className="w-full flex flex-col ml-5">
                    <div className="flex flex-row gap-5 items-center">
                      <Link className="underline text-xl text-600" href="">username</Link>
                      <span className="light">3/23/2023 18:16</span>
                    </div>
                    <div className="flex flex-col">
                      <p>in tab 4 switch to user mode returns to user dashboard</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full chat gap-5">
                <input className="border border-gray-400 rounded-xl w-full" type="text" value="" />
                <Button label="Send" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
