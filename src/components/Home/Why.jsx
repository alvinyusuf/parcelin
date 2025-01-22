import React from 'react'
import why1 from '../../assets/images/why/why1.svg'

function Why() {
    return (
        <div className='grid grid-cols-1 h-full bg-white w-full'>
            <div className='my-10'>
                <div className='mx-4 md:mx-20 space-y-3 md:space-y-6'>
                    <div>
                        <h1 className='text-2xl md:text-5xl font-light text-black'>Kenapa Parcelinpack</h1>
                    </div>
                    <div className="flex overflow-x-scroll space-x-2 md:space-x-4">
                        <div className='w-64 md:w-80 flex-shrink-0'>
                            <div className='p-4 bg-gray-50 shadow-sm bg-opacity-80 rounded-xl'>
                                <div className='space-y-3 md:space-y-10 my-2 md:my-6'>
                                    <div className='md:space-y-2'>
                                        <img src={why1} alt="" />
                                        <h1 className='text-lg md:text-3xl font-light'>Professional</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-sm md:text-base font-light'
                                            style={{ textAlign: "justify" }}
                                        >
                                            Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik.
                                            Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi.
                                            Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-64 md:w-80 flex-shrink-0'>
                            <div className='p-4 bg-gray-50 shadow-sm bg-opacity-80 rounded-xl'>
                                <div className='space-y-3 md:space-y-10 my-2 md:my-6'>
                                    <div className='md:space-y-2'>
                                        <img src={why1} alt="" />
                                        <h1 className='text-lg md:text-3xl font-light'>Professional</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-sm md:text-base font-light'
                                            style={{ textAlign: "justify" }}
                                        >
                                            Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik.
                                            Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi.
                                            Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-64 md:w-80 flex-shrink-0'>
                            <div className='p-4 bg-gray-50 shadow-sm bg-opacity-80 rounded-xl'>
                                <div className='space-y-3 md:space-y-10 my-2 md:my-6'>
                                    <div className='md:space-y-2'>
                                        <img src={why1} alt="" />
                                        <h1 className='text-lg md:text-3xl font-light'>Professional</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-sm md:text-base font-light'
                                            style={{ textAlign: "justify" }}
                                        >
                                            Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik.
                                            Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi.
                                            Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Why