import background from "../../assets/images/service/hero.png";

function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src={background}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative flex flex-col items-center justify-center md:items-start md:justify-end min-h-screen p-14">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Layanan Kami</h1>
        <p>Kami menawarkan berbagai layanan untuk memenuhi kebutuhan packaging dan branding Anda. Mulai dari kemasan produk yang fungsional dan menarik, hampers serta corporate gift yang eksklusif, merchandise berkualitas, hingga PR packaging yang memukau. ParcelinPack siap membantu Anda menciptakan kesan terbaik untuk setiap momen dan kebutuhan bisnis Anda.</p>
      </div>
    </div>
  );
}

export default Hero;