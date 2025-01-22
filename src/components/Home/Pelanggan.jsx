import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cus1 from '../../assets/images/cus/somethinc.png';
import cus2 from '../../assets/images/cus/slavina.png';

function Pelanggan() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        variableWidth: true,
    };
    
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        variableWidth: true,
        rtl:true,
    };


    return (
        <div className='grid grid-cols-1 h-fit bg-gray-100 bg-opacity-70'>
            <div className='my-10'>
                <div className='space-y-6'>
                    <div className='md:w-1/2 mx-auto'>
                        <h1 className='text-2xl md:text-5xl text-center font-bold'>7500+ Pelanggan</h1>
                        <h1 className='text-xl md:text-3xl text-center font-light'>
                            Sudah mempercayakan packagingnya kepada Kami
                        </h1>
                    </div>
                    <div className='space-y-6'>
                        <Slider {...settings}>
                            <div>
                                <img className='mx-auto' src={cus1} alt="Customer 1" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                        </Slider>
                        <Slider {...settings2}>
                            <div>
                                <img className='mx-auto' src={cus1} alt="Customer 1" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                        </Slider>
                        <Slider {...settings}>
                            <div>
                                <img className='mx-auto' src={cus1} alt="Customer 1" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                            <div>
                                <img className='mx-auto' src={cus2} alt="Customer 2" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pelanggan;
