

function Hubungi() {
    return (
        <div className="grid grid-cols-1 h-screen bg-white">
            <div className="my-auto mx-4 md:mx-20">
                <div className="grid grid-cols-2">
                    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                        <div>
                            <h1 className="text-2xl font-extralight">Hubungi Kami</h1>
                        </div>
                        <div>
                            <h1 className="text-4xl font-light">Konsultasikan Packaging Anda</h1>
                        </div>
                        <div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>Nama</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                    />
                            </div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>No Hp</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                    />
                            </div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>Email</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                    />
                            </div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>Messages</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hubungi