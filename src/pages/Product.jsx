import Footer from "../components/Footer-new";
import Navbar from "../components/Navbar";
import Hero from "../components/Product/Hero";
import Layanan from "../components/Product/Layanan";

function Product() {
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

export default Product;
