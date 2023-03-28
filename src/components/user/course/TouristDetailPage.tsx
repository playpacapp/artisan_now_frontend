import { useTranslations } from "next-intl";
import courses from "@/public/course.json"
import { IoCheckmarkOutline, IoCloseOutline, IoStarSharp, IoShieldCheckmarkSharp, IoChevronDown } from "react-icons/io5"


import {
  Wrapper,
  CourseContainer,
  Container,
  CourseDetail,
  PageLink,
  Icon,
  Button,
} from "../../ui";
import Link from "next/link";
import Image from "next/image"

export function TouristDetailPage() {
  const t = useTranslations("user.course");
  return (
    <>
      <Wrapper aria-hidden={true}>
        <Container className="w-full mx-auto flex flex-col gap-2">
          <div className="flex flex-row">
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-row gap-10">
                <Link href="" className="underline">Add to Favorites</Link>
                <Link href="" className="underline">Share</Link>
              </div>
              <div className="">
                <h3 className="text-start">Stories of Ghosts and Crimes in the Center and Cemetery</h3>
              </div>
              <div className="w-full flex flex-row">
                <span className="light">
                  <b>5.0</b>(5)
                </span>
                <Link href="" className="underline" prefetch={false}>
                  Santiago, chile
                </Link>
              </div>
            </div>
            <div className="w-full flex items-end justify-end">
              <Button label="button" />
            </div>

          </div>
          <div className="w-full grid grid-cols-4 grid-rows-1 gap-3">
            <div className="">
              <Image className="rounded-l-2xl object-cover align-middle" src="/test/006e6dbd-a34a-4c56-8542-f112af3c6ee3.webp" width={600} height={400} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
            <div className="">
              <Image className="object-cover align-middle" src="/test/25e436a1-170c-4f7d-b911-95f9e826ac40.webp" width={600} height={600} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <Image className="object-cover align-middle" src="/test/37bcbacb-2165-48f8-81fe-d748009d8840.webp" width={600} height={600} style={{ width: "100%", height: "100%" }} alt="" />
              <Image className="object-cover align-middle" src="/test/144ed868-8f35-4d27-805f-5e20fa8adb54.webp" width={600} height={600} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
            <div className="">
              <Image className="rounded-r-2xl object-cover align-middle" src="/test/4626cf9a-e86f-4b6a-9c52-302639cb8578.webp" width={600} height={600} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="md:w-[60%] md:pr-5 lg:pr-10">
              <div className="flex flex-col border-b pt-10 pb-3">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-start">
                    <h4 className="text-start">Experience offered by Alejandro</h4>
                    <span className="light">3.5 hours We speak Spanish and English</span>
                  </div>
                  <div className="w-fit">
                    <Image className="rounded-[50px] w-[48px] h-[48px]" src="/hero.jpg" width={48} height={48} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-5">
                <h4 className="mb-5">What will you do</h4>
                <p>
                  We will discover the best stories of ghosts and historical crimes that occurred in Santiago at the site of the event...
                  We will discover the best stories of ghosts and historical crimes that occurred in Santiago at the site of the event...
                  We will discover the best stories of ghosts and historical crimes that occurred in Santiago at the site of the event...
                </p>
                <p>
                  We will begin by exploring the historic center of Santiago surrounded by...
                </p>
                <Link href="" className="underline">More information</Link>
              </div>
              <div className="flex flex-row border-b-1 gap-5 mb-10 py-5">
                <div className="w-fit">
                  <Image className="rounded-[50px] w-[48px] h-[48px]" src="/hero.jpg" width={48} height={48} alt="" />
                </div>
                <div className="flex flex-col justify-start">
                  <h4 className="text-start">Meet the host, Alejandro</h4>
                  <span className="light">Joined in May 2016</span>
                  <div className="flex flex-row gap-10">
                    <ol className="flex flex-wrap gap-5">
                      <li className="flex flex-row gap-2">
                        <Icon icon={IoStarSharp} color="orange" />
                        Reviews
                      </li>
                      <li className="flex flex-row gap-3">
                        <Icon icon={IoShieldCheckmarkSharp} color="green" />
                        Verified Identity
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-items-stretch items-start">
                <div className="max-w-md flex flex-col justify-start px-5">
                  <h4 className="font-bold">The price includes</h4>
                  <ol>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCheckmarkOutline} color="green" />
                      Airport transfers
                    </li>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCheckmarkOutline} color="green" />
                      Airport transfers
                    </li>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCheckmarkOutline} color="green" />
                      Airport transfers
                    </li>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCheckmarkOutline} color="green" />
                      Airport transfers
                    </li>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCheckmarkOutline} color="green" />
                      Airport transfers
                    </li>
                  </ol>
                </div>
                <div className="max-w-md flex flex-col justify-start px-5">
                  <h4 className="font-bold">Price does not include</h4>
                  <ol>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCloseOutline} color="red" />
                      Food and drinks in general
                    </li>
                    <li className="flex flex-row gap-3">
                      <Icon icon={IoCloseOutline} color="red" />
                      Food and drinks in general
                    </li>
                  </ol>
                </div>
              </div>
              <div className="py-5 w-full">
                <Button label="button" />
              </div>
            </div>
            <div className="md:w-[40%] md:pl-5 lg:pl-10 pt-10 mx-auto">
              <div className="rounded-xl border shadow-xl px-5 py-5">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3">
                    <h4>From $30,000 CLP</h4>
                    <span className="light">per Person</span>
                  </div>
                  <div className="mb-10">
                    <Link href="" className="underline" prefetch={false} >Show all prices</Link>
                  </div>
                  <div className="flex flex-row rounded-xl justify-between border p-3">
                    <div className="flex flex-row w-[50%] justify-between gap-2 border-r pr-3">
                      <div className="flex flex-col">
                        <span>DATES</span>
                        <span className="light">Add the dates</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Link className="" href="" prefetch={false}> 
                          <Icon icon={IoChevronDown} /> 
                        </Link> 
                      </div>
                    </div>
                    <div className="flex flex-row w-[50%] justify-between gap-2 pl-3">
                      <div className="flex flex-col">
                        <span>GUESTS</span>
                        <span className="light">1 Participant</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Link className="" href="" prefetch={false}> 
                          <Icon icon={IoChevronDown} /> 
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
