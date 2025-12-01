import Card from "../Card";
import LinkItem from "../LinkItem";
import "../globals.css";

const ITEquipmentSupply = () => {
  const cardsData = [
    {
      title: "Серверное оборудование",
      sections: [
        {
          title: "Серверы мировых производителей:",
          links: [
            { id: 1, name: "XFusion", href: "/vendors/xfusion" },
            { id: 2, name: "Dell", href: "/vendors/dell" },
            { id: 3, name: "HP", href: "/vendors/hp" },
            { id: 4, name: "Lenovo", href: "/vendors/lenovo" },
            { id: 5, name: "Supermicro", href: "/vendors/supermicro" },
            { id: 6, name: "GPU-серверы PCI-E и HGX SXM", href: "#" },
          ],
        },
        {
          title: "Импортозамещение:",
          links: [
            { id: 7, name: "Depo", href: "/vendors/depo" },
            { id: 8, name: "Qtech", href: "/vendors/qtech" },
            { id: 9, name: "NEBO Systems", href: "/vendors/nebo" },
          ],
        },
      ],
    },
    {
      title: "Системы хранения данных",
      sections: [
        {
          title: "СХД ведущих производителей:",
          links: [
            { id: 10, name: "Huawei", href: "/vendors/huawei" },
            { id: 11, name: "Dell", href: "/vendors/dell" },
            { id: 12, name: "HP", href: "/vendors/hp" },
            { id: 13, name: "Lenovo", href: "/vendors/lenovo" },
            { id: 14, name: "Hitachi", href: "/vendors/hitachi" },
            { id: 15, name: "NetApp", href: "/vendors/netapp" },
          ],
        },
        {
          title: "СХД Российских производителей:",
          links: [
            { id: 16, name: "Depo", href: "/vendors/depo" },
            { id: 17, name: "NEBO Systems", href: "/vendors/nebo" },
          ],
        },
      ],
    },
    {
      title: "Сетевое оборудование",
      sections: [
        {
          title: "Оборудование лидеров рынка:",
          links: [
            { id: 18, name: "Huawei", href: "/vendors/huawei" },
            { id: 19, name: "Cisco", href: "/vendors/cisco" },
            { id: 20, name: "Juniper", href: "/vendors/juniper" },
            { id: 21, name: "Brocade", href: "/vendors/brocade" },
            { id: 22, name: "Mellanox", href: "/vendors/mellanox" },
            { id: 23, name: "H3C", href: "/vendors/h3c" },
          ],
        },
        {
          title: "Телекоммуникационное оборудование:",
          links: [{ id: 24, name: "QTech", href: "/vendors/qtech" }],
        },
      ],
    },
  ];

  return (
    <section className="group disable-hover lg:sticky lg:top-[40px] lg:min-h-dvh lg:py-5 z-2 bg-white flex flex-col items-center justify-center">
      <div className="flex justify-between w-full no-hover">
        <div className="flex items-center">
          <span className="block h-px w-0 pb-px group-hover:w-40 transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block size-0 rounded-full group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
        </div>

        <h2
          className="text-brand-normal text-center font-bold leading-normal"
          style={{ fontSize: "clamp(22px, 5vw, 65px)" }}
        >
          Поставка IT-оборудования
        </h2>

        <div className="flex items-center">
          <span className="block size-0 rounded-full group-hover:size-1.5 transition-all duration-300 bg-[#FF0000]"></span>
          <span className="block h-px w-0 pb-px group-hover:w-40 transition-all duration-300 bg-[#FF0000]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mt-[25px]">
        {cardsData.map((card, cardIndex) => (
          <Card
            className="group/card no-hover pt-6 pb-8 w-[353px]"
            key={cardIndex}
            title={card.title}
          >
            {card.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="text-brand-black group-hover/card:text-white transition-all duration-300 mt-4"
              >
                <h4 className="italic text-[12px] mb-4">{section.title}</h4>

                <div className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <LinkItem name={link.name} href={link.href} key={link.id} />
                  ))}
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ITEquipmentSupply;