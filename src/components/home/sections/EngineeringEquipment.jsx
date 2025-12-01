import Card from "../Card";
import LinkItem from "../LinkItem";
import "../globals.css"

const EngineeringEquipment = () => {
  const links = [
    { id: 10, name: "Dallmeier" },
    {
      id: 11,
      name: "IDIS - IP-видеонаблюдение, ПО, комплексные решения, турникеты доступа AVIX",
    },
    {
      id: 12,
      name: "Протон-М (РФ) - системы интеллектуального видеонаблюдения для транспорта",
    },
  ];

  const links2 = [
    { id: 1, name: "DELTA ELECTRONICS - 1Ф/3Ф" },
    { id: 2, name: "EVADA ELECTRONICS - 1Ф/3Ф" },
    {
      id: 3,
      name: "СИНЕКСЕЛЬ - Модульный ЗФ, направление DC - Выпрямители - Инверторы 48B",
    },
    { id: 4, name: "ПАРУС ЭЛЕКТРО (РФ) - Входит в реестр Минпромторга" },
  ];

  return (
    <section className="group disable-hover lg:sticky lg:top-[40px] lg:min-h-dvh max-lg:py-5 z-3 bg-white flex flex-col items-center justify-center py-10">
      <div className="flex justify-between w-full no-hover">
        <div className="flex items-center">
          <span className="block h-px w-0 pb-px md:group-hover:w-40 transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block size-0 rounded-full md:group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
        </div>

        <h2 className="text-brand-normal text-center font-bold text-[15px] md:text-5xl lg:text-[50px] xl:text-[60px] 2xl:text-[65px] leading-[normal]">
          ИНЖЕНЕРНОЕ ОБОРУДОВАНИЕ
        </h2>

        <div className="flex items-center">
          <span className="block size-0 rounded-full md:group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block h-px w-0 pb-px md:group-hover:w-40 transition-all duration-300 bg-[#FF0000]"></span>
        </div>
      </div>

      <div className="max-w-[1050px] w-full mx-auto mt-[20px] flex flex-col items-center justify-center gap-15">
        <Card
          className="group/card no-hover pt-8 pb-5 w-full"
          title="СИСТЕМЫ ВИДЕО НАБЛЮДЕНИЯ"
        >
          <div className="flex flex-col gap-3 text-brand-black md:group-hover/card:text-white transition-all duration-300 mt-5">
            {links.map((link) => (
              <LinkItem name={link.name} href="/vendors" key={link.id} />
            ))}
          </div>
        </Card>

        <Card
          className="group/card no-hover pt-8 pb-5 w-full"
          title="ИСТОЧНИКИ БЕСПЕРЕБОЙНОГО ПИТАНИЯ"
        >
          <div className="flex flex-col gap-3 text-brand-black md:group-hover/card:text-white transition-all duration-300 mt-5">
            {links2.map((link) => (
              <LinkItem name={link.name} href="/vendors" key={link.id} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EngineeringEquipment;
