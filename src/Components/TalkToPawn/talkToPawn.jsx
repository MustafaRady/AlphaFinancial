import React from 'react'
import { useInView } from 'react-intersection-observer'

const TalkToPawn = () => {

    const [ref_7,inView_7] = useInView(
        {
            triggerOnce:true,
            threshold:0.1
        }
    )
  return (
    <div className='w-full footer p-12'>
        <div className='w-4/5 flex flex-col gap-4 mx-auto items-center text-center'>
            <div className='bg-black p-8'>

            </div>

            <div className={`${inView_7?'downToUp':''} flex flex-col gap-4`}>
                <h1 className='text-4xl font-bold'>
                    Talk To PAWAN NOW!
                </h1>

                <div 
                    ref={ref_7}
                    className={`footer-button p-5 font-bold rounded-md cursor-pointer`}>
                    CONTACT US 
                </div>
            </div>
            

            <h3 >
                Feel Free to Get in Touch for a No Obligations <span className='underlined'>Call <span className='font-bold'>PAWAN</span> !!!</span>
            </h3>
        </div>
      </div>
  )
}

export default TalkToPawn