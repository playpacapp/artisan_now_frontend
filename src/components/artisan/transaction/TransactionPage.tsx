import { VAR_STR_RESERVATIONS, VAR_STR_TRANSACTION_HISTORY } from "@/src/functions";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Wrapper, Container, Tab, Button, DateRangePicker, CustomeRadioGroup, LineChart } from "../../ui";
import Image from "next/image"


const Reservations = () => {
  const t = useTranslations("artisan.transaction");
  return (
    <>
      <div className="w-full items-start justify-center mb-[100px]">
        <div className="flex flex-row justify-between">
          <h2 className="text-start">{t('reservations.confirm-title')}</h2>
          {/* <Button className="text-end h-fit" label="Crear una nueva experiencia" /> */}
        </div>
        <div className="flex flex-col px-5 py-7 rounded-xl shadow-lg border border-gray-300">
          <div className="flex flex-row items-center justify-between gap-x-10">
            <div className="flex flex-col">
              <h3>{t("reservations.share-table")}</h3>
              <p className="text-gray-600 mb-10">{t("reservations.share-table-description")}</p>
              <span>date and hour</span>
            </div>
            <div className="w-fit">
              <div className="border-2 w-[250px] h-[150px] rounded-lg">
                <Image className=""  src="/test.webp" alt="" width={100} height={100} style={{width:"100%", height:"100%"}} />
              </div>
            </div>
          </div>
          <hr className="my-5"></hr>
          <div className="w-full flex flex-row gap-5 ">
            <Link className="underline" href="">{t("reservations.see")}</Link>
          </div>
        </div>
        <div className="flex flex-col h-[300px] overflow-y-auto">

        </div>
      </div>

      <div className="w-full items-start justify-center">
        <div className="flex flex-row justify-between">
          <h2 className="text-start">{t('reservations.confirm-title')}</h2>
          {/* <Button className="text-end h-fit" label="Crear una nueva experiencia" /> */}
        </div>
        <div className="flex flex-col px-5 py-7 rounded-xl shadow-lg border border-gray-300">
          <div className="flex flex-row items-center justify-between gap-x-10">
            <div className="flex flex-col">
              <span className="border w-fit px-3 py-1 border-l-[5px] border-brown-600 rounded-md mb-3">Experiencia rechazada</span>
              <h3>{t("reservations.confirmed-title")}</h3>
              <p className="text-gray-600 mb-10">{t("reservations.confirmed-description")}</p>
            </div>
            <div className="w-fit">
              <div className="border-2 w-[250px] h-[150px] rounded-lg">
              <Image className=""  src="/test.webp" alt="" width={100} height={100} style={{width:"100%", height:"100%"}} />
              </div>
            </div>
          </div>
          <hr className="my-5"></hr>
          <div className="w-full flex flex-row gap-5 ">
            <Link className="underline" href="">{t("reservations.see")}</Link>
            <Link className="underline" href="">{t("reservations.accept")}</Link>
            <Link className="underline" href="">{t("reservations.decline")}</Link>
          </div>
        </div>
        <div className="flex flex-col h-[300px] overflow-y-auto">

        </div>
      </div>
    </>
  )
}

const Transaction = () => {
  const t = useTranslations("artisan.transaction");

  return (
    <>
      <div className="flex flex-wrap w-full items-start justify-left mb-[100px] gap-5">
        <div className="max-w-sm">
          <h4 className="mb-10">Selecciona el tipo de transacción a consultar</h4>
          <CustomeRadioGroup />
        </div>
        <div className="w-fit">
          <DateRangePicker />
        </div>
         
        <div className="">
          <h4 className="mb-10">Panel de informacion general</h4>
          <div className="flex flex-col px-5 py-7 rounded-xl shadow-lg border border-gray-300">
            <div className="flex flex-row justify-between">
              <span>Ventas totales</span>
              <Link className="underline" href="">Ver Informe</Link>
            </div>
            <div className="flex flex-col">
              <h2 className="text-start">{"$0,00"}</h2>
              <h6 className="text-gray-900">VENTAS A LARGO DEL TIEMPO</h6>
              <div className="chart h-[200px]">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full items-start mb-[100px]">
        <div className="flex flex-col px-5 py-7 rounded-xl shadow-lg border border-gray-300">
          <div className="flex flex-col justify-start gap-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-start">{"Saldo de Paypal"}</h3>
              <h2 className="text-start">{"$0,00"}</h2>
              <span>Saldo Desponible</span>
            </div>
            <Button className="w-fit" label="Transferir fondos" />
          </div>
        </div>
      </div>
      <div className="w-full items-start mb-[100px]">
        <div className="flex flex-row">
          <h2 className="text-start">Historial de movimientos</h2>
        </div>
        <div className="flex flex-col h-[500px] overflow-y-auto">

        </div>
      </div>

    </>
  )
}

export function TransactionPage() {
  const t = useTranslations("artisan.transaction");
  const [isVisible, setVisible] = useState(VAR_STR_RESERVATIONS)
  return (
    <>
      <Wrapper>
        <Container>
          <div className="flex flex-wrap w-full items-start gap-x-10 mb-20">
            <Tab label={t('tab-reservations')} isSelected={isVisible === VAR_STR_RESERVATIONS} action={() => { setVisible(VAR_STR_RESERVATIONS) }} />
            <Tab label={t('tab-history')} isSelected={isVisible === VAR_STR_TRANSACTION_HISTORY} action={() => { setVisible(VAR_STR_TRANSACTION_HISTORY) }} />
          </div>
          {isVisible == VAR_STR_RESERVATIONS && <Reservations />}
          {isVisible == VAR_STR_TRANSACTION_HISTORY && <Transaction />}
        </Container>
      </Wrapper>

    </>
  );
}
