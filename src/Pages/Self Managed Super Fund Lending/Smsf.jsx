import React from 'react'
import "./style.css"
import Image from '../../assets/smsf/image.jpg'
import Roof from '../../assets/refinancing/roof.png'

import Image1 from '../../assets/shared/image1.jpg'
import Image2 from '../../assets/shared/image2.jpg'
import Image3 from '../../assets/shared/image3.jpg'
import Image4 from '../../assets/shared/image4.jpg'
import { useInView } from 'react-intersection-observer'



const Smsf = () => {

    
    const [ref_1, inView_1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='greyBackground w-full'>
        <div className='w-11/12 mx-auto pt-5 '>
            <div className='text-5xl font-bold pb-12'>
                Self-Managed Super Fund (SMSF) Lending
            </div>
        </div>

        <div className='w-full relative'>
                {/* Image with reduced opacity */}
            <img src={Image1} className='w-full h-full object-cover opacity-65' alt="" />

            
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50' />
            
            
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <h1 
                    className={`${inView_1?'downToUp':''} font-bold text-white text-6xl`}
                >
                    Self-Managed Super Fund (SMSF) Lending
                </h1>
            </div>
        </div>

        <div 
            ref={ref_2}
            className={`${inView_2?'downToUp':''} w-11/12 mt-8 mx-auto flex flex-col-reverse xl:flex-row  gap-10`}>
            <div className='flex-1'>
                <img src={Image} alt="" className='h-full object-cover ' />
            </div>

            <div className='flex-1 flex flex-col gap-5 '>
                <div className='flex flex-col gap-5 '>
                   <h1 className='font-bold text-3xl'>
                    Maximize Your Retirement Savings with Alphaa Financial Solutions' SMSF                    
                   </h1>
                   <p class="elementor-icon-box-description">
						At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. <br/>
                        Whether you're looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs. <br/>
                        With our deep understanding of SMSF regulations and market trends, we ensure a seamless process, allowing you to leverage your superannuation for strategic investment opportunities and achieve your long-term financial goals.
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Tailored Lending Solutions for SMSFs            
                            </h1>
                            <p className='font-thin leading-7'>
                                Our SMSF loans are designed specifically for the unique requirements of self-managed super funds, providing you with the flexibility to invest in residential or commercial property
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Competitive Interest Rates to Maximize Returns
                            </h1>                            
                            <p className='font-thin leading-7'>
                                Take advantage of our competitive interest rates that help you maximize the returns on your SMSF property investments, ensuring your retirement savings grow efficiently.
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Expert Guidance on SMSF Regulations
                            </h1>
                            <p className='font-thin leading-7'>
                                Navigating SMSF regulations can be complex, but our team of experts is here to provide personalized advice and support, ensuring compliance and optimal financial outcomes.
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Flexible Repayment Options for Financial Security                            
                            </h1>
                            <p className='font-thin leading-7'>
                            We offer flexible repayment plans that align with your SMSF’s cash flow, helping you manage your retirement savings with confidence and ease.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div 
            ref={ref_3}
            className={` ${inView_3?'downToUp':''} mt-10 w-full`}>
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

export default Smsf;