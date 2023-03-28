import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";
import Image from "next/image"

import { Input, Wrapper, CategoriesBar, CourseContainer, Container } from "../../ui";

export function TripsPage() {
  const t = useTranslations("user.trips");
  return (
    <>
      <Wrapper>
        <Container>
          <div className="w-full items-start justify-center mx-auto">
            <h3> Next trip confirmed</h3>
            <div className="flex flex-col">
              <div className="flex flex-row gap-10">
                <div className="w-[200px] h-[170px]">
                  <Image className="" src="/test.webp" alt="" width={600} height={400} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="flex flex-col">
                  <h5>Sao João do Rio Vermelho</h5>
                  <span className="light">Host: Vila</span>
                  <span className="light">Mar 15, 2022 - Apr 14, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </Wrapper>
    </>
  );
}
