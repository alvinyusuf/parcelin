import exp1 from '../../assets/images/exp/exp1.png'
import exp2 from '../../assets/images/exp/exp2.png'
import exp3 from '../../assets/images/exp/exp3.png'

function Exp() {
    return (
        <div className='grid grid-cols-1 h-full bg-white'>
            <div className='my-10 space-y-3 md:space-y-6'>
                <div className='mx-4 md:mx-20'>
                    <div className='flex justify-between gap-0.5 md:gap-1 w-full'>
                        <div className='w-1/2'>
                            <div>
                                <img className='w-full h-full' src={exp1} alt="" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div>
                                <img className='w-full h-full' src={exp2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <div>
                            <img className='w-full h-full' src={exp3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Exp