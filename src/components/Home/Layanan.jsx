import lay1 from "../../assets/images/layanan/lay1.png";
import lay2 from "../../assets/images/layanan/lay2.png";
import lay3 from "../../assets/images/layanan/lay3.png";
import lay4 from "../../assets/images/layanan/lay4.png";
import { MdArrowOutward } from "react-icons/md";

function Layanan() {
  const services = [
    {
      text: "Kemasan Produk",
      img: lay2,
    },
    {
      text: "Hampers & Corporate gift",
      img: lay3,
    },
    {
      text: "Merchandise",
      img: lay4,
    },
    {
      text: "PR Packaging",
      img: lay1,
    },
  ];

  return (
    <div className="grid grid-cols-1 h-fit bg-white">
      <div className="my-10 space-y-3 md:space-y-6">
        <div className="mx-4 md:mx-20">
          <h1 className="text-2xl md:text-5xl font-light">Layanan Kami</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 px-10 gap-0.5 md:gap-2">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="relative">
                <img
                  className="w-full h-60 md:h-full object-cover inset-0 rounded-xl"
                  src={service.img}
                  alt=""
                />

                <div className="absolute bottom-3 md:bottom-3 left-5 w-5/6 md:w-4/5">
                  <div className="flex justify-between items-center gap-x-2">
                    <div className="shadow-xl p-1 bg-gray-700 bg-opacity-50 rounded-xl my-auto px-4">
                      <h1 className="text-white text-xl md:text-lg font-sans">
                        {service.text}
                      </h1>
                    </div>

                    <div className="p-1 bg-gray-700 rounded-full shadow-xl bg-opacity-50 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <MdArrowOutward className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layanan;
