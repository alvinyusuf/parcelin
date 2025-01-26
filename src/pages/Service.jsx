import Footer from "../components/Footer-new";
import Navbar from "../components/Navbar";
import Hero from "../components/service/Hero";
import Layanan from "../components/service/Layanan";

function Service() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
              <Hero />
              <Layanan />
            </div>
            <Footer />
        </main>
    )
}

export default Service;
