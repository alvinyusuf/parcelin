import { useEffect, useRef, useState } from "react";

function Why() {
  const services = [
    {
      text: "Professional",
      description:
        "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
    },
    {
      text: "Variatif",
      description:
        "Parcelinpack menghadirkan berbagai pilihan kemasan yang fleksibel dan dapat disesuaikan dengan kebutuhan setiap bisnis, mulai dari bentuk, bahan, hingga desain, memastikan solusi kemasan terbaik yang sesuai dengan karakter produk Anda.",
    },
    {
      text: "Kreatif",
      description:
        "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
    },
    {
      text: "Minimal Order Rendah",
      description:
        "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
    },
    {
      text: "Budget Fleksibel",
      description:
        "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
    },
  ];

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    updateScrollbarThumb();
  }, []);

  const updateScrollbarThumb = () => {
    const container = scrollContainerRef.current;
    const scrollbar = scrollbarRef.current;
    if (!container || !scrollbar) return;

    const scrollPercentage =
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) *
      100;
    const thumbWidth = (container.clientWidth / container.scrollWidth) * 100;
    const thumbPosition = (scrollPercentage * (100 - thumbWidth)) / 100;

    scrollbar.style.setProperty("--thumb-width", `${thumbWidth}%`);
    scrollbar.style.setProperty("--thumb-position", `${thumbPosition}%`);

    setIsAtStart(container.scrollLeft === 0);
    setIsAtEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth
    );
  };

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 350;
      const newScrollPosition =
        direction === "left"
          ? scrollContainer.scrollLeft - scrollAmount
          : scrollContainer.scrollLeft + scrollAmount;

      scrollContainer.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      setTimeout(updateScrollbarThumb, 300);
    }
  };

  return (
    <div className="bg-white py-10 px-10 relative">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-light text-black">
          Kenapa Parcelinpack
        </h1>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-2 md:space-x-4 max-w-[90vw] md:max-w-[95vw] scrollbar-hide"
        onScroll={updateScrollbarThumb}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none w-1/4 space-y-4 py-4 bg-gray-100 rounded-2xl overflow-hidden"
          >
            <div className="h-48">
              <img
                src={`/images/why/why${index + 1}.png`}
                alt={service.text}
                className="w-28 h-28 object-contain p-4"
              />
              <h2 className="px-4 text-4xl font-medium">{service.text}</h2>
            </div>
            <p className="px-4 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={scrollbarRef}
        className="custom-scrollbar mt-4 mx-auto w-40 h-3 bg-gray-200 rounded-full relative"
      >
        <div
          className="custom-scrollbar-thumb absolute top-0 h-full bg-gray-400 rounded-full"
          style={{
            width: "var(--thumb-width, 20%)",
            left: "var(--thumb-position, 0%)",
          }}
        />
      </div>

      {!isAtStart && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}

      {!isAtEnd && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Why;
