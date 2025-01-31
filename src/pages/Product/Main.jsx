import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Main() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='flex flex-col w-full h-full py-24'>
              <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Main;
