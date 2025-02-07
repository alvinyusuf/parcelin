import Hero from "../components/Contact/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Contact() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
            </div>
            <Footer />
        </main>)
}

export default Contact