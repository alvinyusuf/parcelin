import background from "../../assets/images/about/hero.png";

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

      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
      </div>
    </div>
  );
}

export default Hero;
