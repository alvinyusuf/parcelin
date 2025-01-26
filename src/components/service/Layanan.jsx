import lay1 from "../../assets/images/service-layanan/lay1.png";
import lay2 from "../../assets/images/service-layanan/lay2.png";
import lay3 from "../../assets/images/service-layanan/lay3.png";
import lay4 from "../../assets/images/service-layanan/lay4.png";
import { MdArrowOutward } from "react-icons/md";

function Layanan() {
  const services = [
    {
      text: "Kemasan Produk",
      tags: ["Custom Box", "Plastic Packaging", "lorem"],
      img: lay1,
    },
    {
      text: "Hampers & Corporate gift",
      tags: ["Custom Box", "Plastic Packaging", "lorem"],
      img: lay2,
    },
    {
      text: "Merchandise",
      tags: ["Custom Box", "Plastic Packaging", "lorem"],
      img: lay3,
    },
    {
      text: "PR Packaging",
      tags: [
        "Totebag",
        "Pouch",
        "Card Holder",
        "Flashdisk",
        "Pen",
        "Tumbler",
        "Umbrella",
      ],
      img: lay4,
    },
  ];

  return (
    <div className="p-6 sm:p-10 my-10">
      <h1 className="text-3xl font-bold text-center mb-6">Layanan Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col h-full border shadow-lg rounded-xl overflow-hidden"
          >
            <img
              className="w-full max-h-[200px] object-cover"
              src={service.img}
              alt={service.text}
            />  
            <div className="flex flex-col p-4 gap-y-4">
              <h2 className="text-xl font-semibold">{service.text}</h2>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center justify-between px-4 py-2 mt-4 bg-white border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                <p>Lihat Selengkapnya</p>
                <MdArrowOutward className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layanan;
