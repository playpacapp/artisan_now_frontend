import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import { Input, Wrapper, CategoriesBar, CourseContainer, Tab, Container, Button } from "../../ui";

const VAR_STR_EXPERIENCE = "experience"

export function ArtisanDashboardPage() {
  //const t = useTranslations("user.favorite");
  const [isVisible, setVisible] = useState(VAR_STR_EXPERIENCE)
  return (
    <>
      <Wrapper>
        <Container>
          <div className="w-full items-start justify-center mb-20">
            <Tab label="Experiences" isSelected={isVisible === VAR_STR_EXPERIENCE} action={() => { setVisible(VAR_STR_EXPERIENCE) }} />
          </div>
          <div className="w-full items-start justify-center">
            <div className="flex flex-row justify-between">
              <h2 className="text-start">Tus Experiencia</h2>
              <Button className="text-end h-fit" label="Crear una nueva experiencia" />
            </div>
            <div className="flex flex-col px-5 py-7 rounded-xl shadow-lg border border-gray-300">
              <div className="flex flex-row items-center gap-5">
                <div className="flex flex-col">
                  <span className="border w-fit px-3 py-1 border-l-[5px] border-brown-600 rounded-md mb-3">Experiencia rechazada</span>
                  <h3>Compatimos la mesa?</h3>
                  <p className="text-gray-600 mb-10">Al parecer, tu experiencia no cumple nuestros estandares. Consulta nuestros estandares de calidad y envianos una idea nueva.</p>
                </div>
                <div className="w-fit">
                  <div className="border-2 w-[250px] h-[150px] rounded-lg"></div>
                </div>
              </div>
              <hr></hr>
              <div className="w-full flex flex-row gap-5 px-10 pt-3 mt-2">
                <Link className="underline" href="">Consulta los estandares</Link>
                <Link className="underline" href="">Elimina</Link>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
