import Wrapper from "@/src/components/ui/wrapper";
import { ArrowRightIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

import {
  ImageContent,
  SocialLink,
  IconInput,
  DefaultButton,
  ImageCard,
  ImageButton,
} from "../../components/ui/index";

function HomeContent() {
  return (
    <>
      <Wrapper>
        <div className="flex w-full h-{55vh} bg-orange-300 before:absolute before:inset-0 before:bg-[url('/hero.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-95">
          <div className="relative items-center justify-center lg:w-3/4 sm:w-full m-auto lg:px-20 lg:py-20 sm:px-5 sm:py-5">
            <h1 className="text-center text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              ROUTES OF ARTISANS
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl">
              Immerse yourself in the secrets of the Mapuche loom, the weaving
              in boque, the dyeing of natural wool, the harvest and distillation
              of lavender and other knowledge in the company of its
              protagonists.
            </p>

            <div className="flex justify-center space-x-6">
              <DefaultButton url="" target="" label="Experiences" />
              <DefaultButton url="" target="" label="Experiences Online" />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex bg-white w-full">
          <div className="items-center justify-center w-2/3 lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Visión
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Timeless design or futuristic backlit keyboard? No matter what you
              prefer
            </p>
            <div className="flex justify-center  space-x-6">
              <DefaultButton url="" target="" label="Go ⟶" />
            </div>
          </div>
          <div className="absoulte rigth-0 bottom-0 items-center w-1/3 px-10 py-10 xl:leading-tight">
            <div className="flex items-center w-full m-auto">
              <Image
                src="/vision.png"
                blurDataURL={"/vision.png"}
                width="340"
                height="340"
                alt="Vision"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex-wrap bg-orange-200 w-full lg:px-10 lg:py-20 sm:px-5 sm:py-10">
          <div className="flex items-center w-full justify-center lg:px-10 lg:py-30 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              How does it work?
            </h1>
          </div>
          <div className="flex-wrap w-full items-center justify-center grid grid-cols-3 gap-4">
            <ImageContent url="/gi-01.png" size={128} label="Easy to Type" />
            <ImageContent url="/gi-01.png" size={128} label="Easy to Type" />
            <ImageContent url="/gi-01.png" size={128} label="Easy to Type" />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex-wrap bg-white w-full px-40 py-10">
          <div className="flex-wrap w-full items-center justify-center grid grid-cols-5 gap-3">
            <ImageButton
              url="/image/icon/icons8-user-experience-64.png"
              size={96}
              label="Experiences"
            />
            <ImageButton
              url="/image/icon/icons8-website-64.png"
              size={96}
              label="Experiences Online"
            />
            <ImageButton
              url="/image/icon/icons8-wool-64.png"
              size={96}
              label="Wool"
            />
            <ImageButton
              url="/image/icon/icons8-natural-64.png"
              size={96}
              label="Natural Fiber"
            />
            <ImageButton
              url="/image/icon/icons8-cosmetics-64.png"
              size={96}
              label="Cosmetic"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex-wrap bg-white w-full px-40 py-10">
          <div className="flex items-center justify-center">
            <IconInput
              className="w-3/4"
              type="text"
              placeholder="Search"
              path="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
            />
          </div>
          <div className="flex-wrap w-full items-center justify-center grid grid-rows-2 grid-cols-4 gap-x-3 gap-y-6">
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex bg-white w-full">
          <div className="items-center justify-center w-1/2 lg:px-10 lg:py-40 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Follow Us
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Timeless design or futuristic backlit keyboard? No matter what you
              prefer
            </p>
            <div className="flex justify-center space-x-6">
              <SocialLink
                url="#"
                path="M 50.0625 10.4375 C 48.2148 11.2578 46.2344 11.8086 44.1523 12.0586 C 46.2773 10.7852 47.9102 8.76953 48.6758 6.37109 C 46.6914 7.54688 44.4844 8.40234 42.1445 8.86328 C 40.2695 6.86328 37.5977 5.61719 34.6406 5.61719 C 28.9609 5.61719 24.3555 10.2188 24.3555 15.8984 C 24.3555 16.7031 24.4492 17.4883 24.625 18.2422 C 16.0781 17.8125 8.50391 13.7188 3.42969 7.49609 C 2.54297 9.01953 2.03906 10.7852 2.03906 12.668 C 2.03906 16.2344 3.85156 19.3828 6.61328 21.2305 C 4.92578 21.1758 3.33984 20.7109 1.95313 19.9414 C 1.95313 19.9844 1.95313 20.0273 1.95313 20.0703 C 1.95313 25.0547 5.5 29.207 10.1992 30.1563 C 9.33984 30.3906 8.42969 30.5156 7.49219 30.5156 C 6.82813 30.5156 6.18359 30.4531 5.55469 30.3281 C 6.86719 34.4102 10.6641 37.3906 15.1602 37.4727 C 11.6445 40.2305 7.21094 41.8711 2.39063 41.8711 C 1.55859 41.8711 0.742188 41.8242 -0.0585938 41.7266 C 4.48828 44.6484 9.89453 46.3477 15.7031 46.3477 C 34.6172 46.3477 44.9609 30.6797 44.9609 17.0938 C 44.9609 16.6484 44.9492 16.1992 44.9336 15.7617 C 46.9414 14.3125 48.6836 12.5 50.0625 10.4375 Z"
              />
              <SocialLink
                url="#"
                path="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
              />
              <SocialLink
                url="#"
                path="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"
              />
            </div>
          </div>
          <div className="items-center justify-center w-1/2 lg:px-10 lg:py-40 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Do not miss the new routes.
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Timeless design or futuristic backlit keyboard? No matter what you
              prefer
            </p>
            <div className="flex justify-center">
              <IconInput
                className="w-3/4"
                type="email"
                placeholder="Email"
                path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default HomeContent;
