import Hero from "../components/Contact/Hero";
import Hubungi from "../components/Contact/Hubungi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Promote from '../components/Promote'

function Contact() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Hubungi />
                <Promote />
            </div>
            <Footer />
        </main>)
}

export default Contact