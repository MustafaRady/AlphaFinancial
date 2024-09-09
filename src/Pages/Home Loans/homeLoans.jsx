import React from 'react'
import Image1 from '../../assets/homeLoans/image1.jpg'
import Roof from '../../assets/homeLoans/roof.png'
import Image2 from '../../assets/homeLoans/image2.jpg'
import Image3 from '../../assets/homeLoans/image3.jpg'
import Image4 from '../../assets/homeLoans/image4.jpg'
import Image5 from '../../assets/homeLoans/image5.jpg'
import { useInView } from 'react-intersection-observer'

import "./style.css"

const HomeLoans = () => {

    const [ref_1, inView_1] = useInView({ 
        triggerOnce:true,
        threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ 
        triggerOnce:true,
        threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ 
        triggerOnce:true,
        threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ 
        triggerOnce:true,
        delay: 400,
        threshold: 0.1 
    });

    const [ref_5, inView_5] = useInView({ 
        triggerOnce:true,
        delay: 100,
        threshold: 0.1 
    });

  return (
    <div className='greyBackground w-full'>
        <div className='w-11/12 mx-auto pt-5 '>
            <div 
                
                className='text-5xl font-bold pb-12'>
                Home Loans
            </div>
        </div>

        <div className='w-full relative'>
                {/* Image with reduced opacity */}
                <img src={Image1} className='w-full h-full object-cover opacity-65' alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50' />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <h1 
                        ref={ref_1}
                        className={`font-bold text-white text-6xl ${inView_1?'downToUp':''}`}
                    >Home Loans</h1>
                </div>
        </div>

        <div className='w-4/5 mx-auto flex flex-col gap-4 items-center justify-center'>
            <img src={Roof} alt="" width={50} />
            <h1 className='font-bold'>
                Alpha Financial Solutions
            </h1>
            <h1 className='text-center text-4xl font-bold'>
                We Offer A Variety Og Home Loan Options Tailored To Suit Your Individual Needs
            </h1>
            <h2 className='text-2xl font-bold'>
                Our Home Loan Services
            </h2>
        </div>

        <div 
            ref={ref_2}
            className={`${inView_2?'downToUp':''} w-11/12 xl:w-4/5 flex mb-10 mx-auto flex-col xl:flex-row gap-7 items-center justify-center my-4`}>
            <div className='flex-1 relative rounded-xl pb-20 '>
                <img src={Image2} alt="" className='rounded-xl h-64 md:h-auto' />
                <div className=' p-2 absolute w-4/5 top-9 md:top-36 xl:top-10 left-7' >
                    <div className='w-full mx-auto bg-white rounded-lg flex flex-col gap-4 items-center justify-center p-2 box-Border-homeLoans'>
                        <h1 className='font-bold'>
                            First Home Buyer
                        </h1>
                         
                        <p>
                            Frst home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex-1 relative rounded-xl pb-20 '>
                <img src={Image3} alt="" className='rounded-xl h-64 md:h-auto' />
                <div className=' p-2 absolute w-4/5 top-9 md:top-36 xl:top-10 left-7' >
                    <div className='w-full mx-auto bg-white rounded-lg flex flex-col gap-4 items-center justify-center p-2 box-Border-homeLoans'>
                        <h1 className='font-bold'>
                            First Home Buyer
                        </h1>
                         
                        <p>
                            Frst home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex-1 relative rounded-xl pb-20 '>
                <img src={Image4} alt="" className='rounded-xl h-64 md:h-auto' />
                <div className=' p-2 absolute w-4/5 top-9 md:top-36 xl:top-10 left-7' >
                    <div className='w-full mx-auto bg-white rounded-lg flex flex-col gap-4 items-center justify-center p-2 box-Border-homeLoans'>
                        <h1 className='font-bold'>
                            First Home Buyer
                        </h1>
                         
                        <p>
                            Frst home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space. 
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-10 w-full '>
            <div className='w-11/12 mx-auto'>
                <div className='w-full flex flex-col-reverse xl:flex-row gap-10'>
                    <div 
                        ref={ref_3}
                        className={`${inView_3?'downToUp':''} flex-1`}>
                        <img src={Image5} alt=""  />     
                    </div>
                    
                    <div 
                        ref={ref_4}
                        className={`${inView_4?'downToUp':''} flex-1`}>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row gap-4'>
                                <div className='bg-orange-400 p-2'>

                                </div>
                                <div>
                                    <h1>
                                        Best Home Loans
                                    </h1>
                                </div>
                            </div>

                            <h1 className='font-bold text-2xl'>
                                Different Type Of Home Loans
                            </h1>

                            <div className='flex flex-col lg:flex-row'>
                                <div className='flex flex-1 flex-col gap-4'>
                                    <h1 className='font-bold text-lg'>
                                        Fixed-Rate Home Loan					
                                    </h1>
                                    <p>
                                        Provides stability with fixed payments but may have higher total interest.
                                    </p>
                                </div>  

                                <div className='flex flex-1 flex-col gap-4'>
                                    <h1 className='font-bold text-lg'>
                                        
						                Variable-Rate Home Loan										
                                    </h1>
                                    <p>
                                        Offers potentially lower payments if rates decrease, but carries risk if rates rise.					                                   
                                     </p>
                                </div> 
                            </div>

                            <div className='flex flex-col lg:flex-row'>
                                <div className='flex-1 flex flex-col gap-4'>
                                    <h1 className='font-bold text-lg'>
                                        Interest-Only Home Loan			
                                    </h1>
                                    <p>

                                    Lower initial payments but higher total interest payable.					                                    </p>
                                </div>  

                                <div className='flex-1 flex flex-col gap-4'>
                                    <h1 className='font-bold text-lg'>                
                                        Hybrid Home Loan										
                                    </h1>
                                    <p>
                                        Combines stability of fixed rate initially with potential savings of variable rate later.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div 
            ref={ref_5}
            className={`${inView_5?'downToUp':''} my-10 w-full`}>
            <div className='w-11/12 mx-auto flex flex-col gap-4 xl:flex-row text-white p-8 rounded-xl items-center justify-center' style={{backgroundColor:"#2a2c38"}}>
                <h1 className='flex-1 text-3xl font-bold'>
                    How To Estimate Mortgage Payments
                </h1>

                <h2 className='flex-1 text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </h2>

                <div className='flex-1/2 p-3 bg-orange-400 rounded-lg font-bold text-black'>
                    INTEREST RATE
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeLoans