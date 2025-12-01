import { Link } from "react-router-dom";
import Card from "../Card";
import "../globals.css"

const Service = () => {
  const links = [
    {
      id: 1,
      name: "Договором ",
      subName: "услуг или сервисными пакетами (Service Packs).",
    },
    {
      id: 2,
      name: "Расширенная техническая поддержка ",
      subName: "с различным уровенем SLA для оборудования Huawei.",
    },
    {
      id: 3,
      name: "Расширенная техническая поддержка ",
      subName: "с различным уровенем SLA для оборудования Lenovo. ",
    },
    {
      id: 4,
      name: "Проектная поставка сервисных комплектующих: ",
      subName: "Lenovo, Dell/EMC, Cisco, IBM, HPE, NetApp, Hitachi",
    },
  ];

  return (
    <section className="group disable-hover lg:sticky lg:min-h-dvh max-lg:py-10 z-4 bg-white flex flex-col items-center justify-center md:pt-0">

      <div className="no-hover">
        <div className="items-start justify-center h-20">
          <span className="ml-[2.3px] block h-0 w-0 pb-px group-hover:h-10 group-hover:w-px transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block size-0 rounded-full group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
        </div>
      </div>

      <div className="flex justify-between w-full no-hover">
        <div className="flex items-center">
          <span className="block h-px w-0 pb-px group-hover:w-100 transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block size-0 rounded-full group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
        </div>

        <h2 className="text-brand-normal text-center font-bold text-[15px] md:text-5xl lg:text-[50px] xl:text-[60px] 2xl:text-[65px] leading-[normal]">
          СЕРВИС
        </h2>

        <div className="flex items-center">
          <span className="block size-0 rounded-full group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block h-px w-0 pb-px group-hover:w-100 transition-all duration-300 bg-[#FF0000]"></span>
        </div>
      </div>

      <div className="max-w-[1050px] w-full mx-auto flex flex-col gap-20 mt-10">
        <Card className="group/card no-hover pt-8 pb-5 w-full">

          <p className="text-brand-black group-hover/card:text-white text-lg font-light">
            <span className="font-bold">
              Оборудование лидирующих мировых производителей{" "}
            </span>
            <span>
              имеет заводскую гарантию, однако она ограничена, в силу того,
              что вендоры ушли с рынка РФ. Здесь требуется участие поставщика
              - посредник заводит сервисную заявку у вендора и ведет сервисный
              кейс от имени заказчика. Основная проблема в этой схеме - сроки
              замены комплектующих. Ранее на территории РФ были склады с
              запчастями, теперь доставка осуществляется со складов в Азии и
              СНГ.
            </span>
          </p>

          <div className="text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
            <h3 className="text-lg text-brand-normal font-bold">
              Партнеры ИТ-Альянс могут воспользоваться дополнительными
              сервисными услугами компании:
            </h3>

            <div className="flex flex-col gap-3 text-brand-black group-hover/card:text-white transition-all duration-300 mt-8">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to="#"
                  className="flex items-center gap-4 hover:text-brand-normal group/link no-hover"
                >
                  <div className="flex items-center">
                    <span className="block h-px w-2 pb-px group-hover/card:bg-brand-white group-hover/link:w-6 transition-all duration-300 bg-brand-black"></span>
                    <span className="block size-1.5 rounded-full group-hover/card:bg-brand-white bg-brand-black"></span>
                  </div>

                  <div>
                    <span className="text-lg font-bold capitalize">{link.name}</span>
                    <span>{link.subName}</span>
                  </div>

                </Link>
              ))}
            </div>
          </div>

        </Card>
      </div>

    </section>
  );
};

export default Service;
