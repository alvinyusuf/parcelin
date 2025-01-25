// // // import why1 from "../../assets/images/why/why1.svg";
// // // import why2 from "../../assets/images/why/why2.png";
// // // import why3 from "../../assets/images/why/why3.png";
// // // import why4 from "../../assets/images/why/why4.png";

// // // function Why() {
// // //     const services = [
// // //         {
// // //             text: "Professional",
// // //             description: "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
// // //             image: why1,
// // //         },
// // //         {
// // //             text: "Kreatif",
// // //             description: "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
// // //             image: why2,
// // //         },
// // //         {
// // //             text: "Minimal Order Rendah",
// // //             description: "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
// // //             image: why3,
// // //         },
// // //         {
// // //             text: "Budget Fleksibel",
// // //             description: "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
// // //             image: why4,
// // //         }
// // //     ]
// // //   return (
// // //     <div className="grid grid-cols-1 h-full bg-white w-full">
// // //       <div className="my-10">
// // //         <div className="mx-4 md:mx-20 space-y-3 md:space-y-6">
// // //           <div>
// // //             <h1 className="text-2xl md:text-5xl font-light text-black">
// // //               Kenapa Parcelinpack
// // //             </h1>
// // //           </div>
// // //           <div className="flex md:justify-center overflow-x-scroll space-x-2 md:space-x-4">
// // //             {services.map((service, index) => (
// // //                 <div key={index} className="w-64 md:w-80 flex-shrink-0">
// // //                 <div className="p-4 bg-gray-50 shadow-sm bg-opacity-80 rounded-xl">
// // //                     <div className="space-y-3 md:space-y-10 my-2 md:my-6">
// // //                     <div className="md:space-y-2">
// // //                         <img src={service.image} alt="" />
// // //                         <h1 className="text-lg md:text-3xl font-light">
// // //                         {service.text}
// // //                         </h1>
// // //                     </div>
// // //                     <div>
// // //                         <h1
// // //                         className="text-sm md:text-base font-light"
// // //                         style={{ textAlign: "justify" }}
// // //                         >
// // //                         {service.description}
// // //                         </h1>
// // //                     </div>
// // //                     </div>
// // //                 </div>
// // //                 </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Why;

// // import why1 from "../../assets/images/why/why1.svg";
// // import why2 from "../../assets/images/why/why2.png";
// // import why3 from "../../assets/images/why/why3.png";
// // import why4 from "../../assets/images/why/why4.png";

// // function Why() {
// //   const services = [
// //     {
// //       text: "Professional",
// //       description:
// //         "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
// //       image: why1,
// //     },
// //     {
// //       text: "Kreatif",
// //       description:
// //         "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
// //       image: why2,
// //     },
// //     {
// //       text: "Minimal Order Rendah",
// //       description:
// //         "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
// //       image: why3,
// //     },
// //     {
// //       text: "Budget Fleksibel",
// //       description:
// //         "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
// //       image: why4,
// //     },
// //   ];

// //   return (
// //     <div className="bg-white py-10 px-4 md:px-20">
// //       <div className="text-center mb-10">
// //         <h1 className="text-3xl md:text-5xl font-light text-black">
// //           Kenapa Parcelinpack
// //         </h1>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {services.map((service, index) => (
// //           <div
// //             key={index}
// //             className="bg-gray-50 shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
// //           >
// //             <img
// //               src={service.image}
// //               alt={service.text}
// //               className="w-full h-40 object-contain bg-gray-100 p-4"
// //             />
// //             <div className="p-6 space-y-4">
// //               <h2 className="text-xl font-medium text-gray-800">{service.text}</h2>
// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 {service.description}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Why;

// import why1 from "../../assets/images/why/why1.svg";
// import why2 from "../../assets/images/why/why2.png";
// import why3 from "../../assets/images/why/why3.png";
// import why4 from "../../assets/images/why/why4.png";

// function Why() {
//   const services = [
//     {
//       text: "Professional",
//       description:
//         "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
//       image: why1,
//     },
//     {
//       text: "Kreatif",
//       description:
//         "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
//       image: why2,
//     },
//     {
//       text: "Minimal Order Rendah",
//       description:
//         "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
//       image: why3,
//     },
//     {
//       text: "Budget Fleksibel",
//       description:
//         "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
//       image: why4,
//     },
//   ];

//   return (
//     <div className="bg-white py-10 px-4 md:px-20">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-light text-black">
//           Kenapa Parcelinpack
//         </h1>
//       </div>

//       <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 overflow-x-auto md:overflow-x-hidden whitespace-nowrap md:whitespace-normal space-x-4 md:space-x-0">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="inline-block md:block bg-gray-50 shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg w-64 md:w-auto"
//           >
//             <img
//               src={service.image}
//               alt={service.text}
//               className="w-full h-40 object-contain bg-gray-100 p-4"
//             />
//             <div className="p-6 space-y-4">
//               <h2 className="text-xl font-medium text-gray-800">{service.text}</h2>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Why;

import why1 from "../../assets/images/why/why1.svg";
import why2 from "../../assets/images/why/why2.png";
import why3 from "../../assets/images/why/why3.png";
import why4 from "../../assets/images/why/why4.png";

function Why() {
  const services = [
    {
      text: "Professional",
      description:
        "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
      image: why1,
    },
    {
      text: "Kreatif",
      description:
        "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
      image: why2,
    },
    {
      text: "Minimal Order Rendah",
      description:
        "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
      image: why3,
    },
    {
      text: "Budget Fleksibel",
      description:
        "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
      image: why4,
    },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-light text-black">
          Kenapa Parcelinpack
        </h1>
      </div>

      <div className="flex space-x-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 md:flex-shrink bg-gray-100 rounded-2xl overflow-hidden w-64 md:w-auto"
          >
            <img
              src={service.image}
              alt={service.text}
              className="w-full h-40 object-contain p-4"
            />
            <div className="p-6 space-y-8">
              <h2 className="text-2xl font-medium">
                {service.text}
              </h2>
              <p className="text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
