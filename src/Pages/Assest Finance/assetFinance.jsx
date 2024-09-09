import React from 'react'
import "./style.css"
import Image from '../../assets/refinancing/image1.jpg'
import Image1 from '../../assets/assestFinance/image1.jpg'
import Roof from '../../assets/refinancing/roof.png'
import Image2 from '../../assets/assestFinance/image2.jpg'
import Image3 from '../../assets/assestFinance/image3.jpg'
import Image4 from '../../assets/assestFinance/image4.jpg'
import { useInView } from 'react-intersection-observer'



const AssetFinance = () => {

    const [ref_1, inView_1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='greyBackground w-full'>
        <div className='w-11/12 mx-auto pt-5 '>
            <div className='text-5xl font-bold pb-12'>
                Asset Finance 
            </div>
        </div>

        <div className='w-full relative'>
                {/* Image with reduced opacity */}
            <img src={Image} className='w-full h-full object-cover opacity-65' alt="" />

            
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50' />
            
            
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <h1 
                    ref={ref_1}
                    className={`${inView_1?'downToUp':''} font-bold text-white text-6xl`}
                >
                    Asset Finance 
                </h1>
            </div>
        </div>

        <div 
            ref={ref_2}
            className={`${inView_2?'downToUp':''} w-11/12 mt-8 mx-auto flex flex-col-reverse xl:flex-row  gap-10`}>
            <div className='flex-1'>
                <img src={Image1} alt="" className='h-full object-cover ' />
            </div>

            <div className='flex-1 flex flex-col gap-5 '>
                <div className='flex flex-col gap-5 '>
                   <h1 className='font-bold text-3xl'>
                        Secure the Equipment and Assets Your Business Needs with Alphaa Financial Solutions                   
                    </h1>
                   <p className='font-thin leading-7'>
                        At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. <br/>
                        Whether you're looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options. <br/>
                        We streamline the application process and work to secure competitive rates, ensuring you get the best possible terms to support your personal or business objectives. <br/>
                        Trust us to simplify your asset and vehicle financing, so you can focus on what matters most.
					</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Flexible Financing for a Wide Range of Assets                            </h1>
                            <p className='font-thin leading-7'>
                                From machinery to vehicles, we provide financing options that cover a broad spectrum of business assets, ensuring you have the right tools to succeed                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Preserve Cash Flow with Tailored Repayment Plans
                            </h1>                            
                            <p className='font-thin leading-7'>
                                Our asset finance solutions offer flexible repayment plans that align with your cash flow, allowing you to maintain liquidity while investing in essential assets.                            
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Competitive Rates for Cost-Effective Asset Acquisition                       
                            </h1>
                            <p className='font-thin leading-7'>
                                Benefit from competitive interest rates that make it easier and more affordable to finance the assets your business needs to grow and thrive.                            
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Expert Guidance Throughout the Financing Process                            
                            </h1>
                            <p className='font-thin leading-7'>
                                Our team of asset finance specialists is here to guide you through the entire financing process, providing personalized support to ensure a seamless experience.                            
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div 
            ref={ref_3}
            className={`${inView_3?'downToUp':''} mt-10 w-full`}>
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

        <div 
            ref={ref_4}
            className={`${inView_4?'downToUp':''} flex flex-col gap-4`}>
            <div className='w-2/3 mx-auto mt-10 flex flex-col gap-4 items-center justify-center'>
                <img src={Roof} alt="" width={50} />
                <h1 className='font-bold'>
                    Lendevi Services 
                </h1>
                <h1 className='text-center text-4xl font-bold'>
                    Many resources can help you make informed decisions during homebuying                
                </h1>
                <h2 className='text-2xl font-normal'>
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                
                </h2>
            </div>

            <div className=' w-11/12 xl:w-4/5 flex flex-col xl:flex-row gap-10 mb-24 mx-auto'>
                {/* First Section */}
                <div className='flex-1 relative rounded-xl '>
                    <img src={Image2} alt="House Payment" className='rounded-xl w-full h-64 md:h-auto object-cover' />
                    {/* Overlay box starting from the center and extending beyond the bottom */}
                    <div className='absolute w-4/5 left-1/2 transform -translate-x-1/2 top-1/2 translate-y-1/4 bg-white border-b-4 border-orange-400 rounded-lg p-4 text-center'>
                        <h1 className='text-lg font-bold mb-2'>House Payment</h1>
                        <p className='text-sm'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>

                {/* Second Section */}
                <div className='flex-1 relative rounded-xl '>
                    <img src={Image3} alt="Industrial Payment" className='rounded-xl w-full h-64 md:h-auto object-cover' />
                    <div className='absolute w-4/5 left-1/2 transform -translate-x-1/2 top-1/2 translate-y-1/4 bg-white border-b-4 border-orange-400 rounded-lg p-4 text-center'>
                        <h1 className='text-lg font-bold mb-2'>Industrial Payment</h1>
                        <p className='text-sm'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>

                {/* Third Section */}
                <div className='flex-1 relative rounded-xl '>
                    <img src={Image4} alt="Corporate Payment" className='rounded-xl w-full h-64 md:h-auto object-cover' />
                    <div className='absolute w-4/5 left-1/2 transform -translate-x-1/2 top-1/2 translate-y-1/4 bg-white border-b-4 border-orange-400 rounded-lg p-4 text-center'>
                        <h1 className='text-lg font-bold mb-2'>Corporate Payment</h1>
                        <p className='text-sm'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AssetFinance