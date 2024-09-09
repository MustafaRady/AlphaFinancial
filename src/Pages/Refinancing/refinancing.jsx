import React from 'react'
import "./style.css"
import Image1 from '../../assets/refinancing/image1.jpg'
import Image2 from '../../assets/refinancing/image2.jpg'
import Roof from '../../assets/refinancing/roof.png'
import Image3 from '../../assets/homeLoans/image3.jpg'
import Image4 from '../../assets/homeLoans/image4.jpg'
import { useInView } from 'react-intersection-observer'



const Refinancing = () => {


    const [ref_1, inView_1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div className='greyBackground w-full'>
        <div className='w-11/12 mx-auto pt-5 '>
            <div className='text-5xl font-bold pb-12'>
                Refinancing 
            </div>
        </div>

        <div className='w-full relative'>
                {/* Image with reduced opacity */}
            <img src={Image1} className='w-full h-full object-cover opacity-65' alt="" />

            
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50' />
            
            
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <h1
                    ref={ref_1} 
                    className={`${inView_1?'downToUp':''} font-bold text-white text-6xl`}
                >
                    Refinancing
                </h1>
            </div>
        </div>

        <div 
            ref={ref_2}
            className={`${inView_2?'downToUp':''} w-11/12 mt-8 mx-auto flex flex-col-reverse xl:flex-row  gap-10`}>
            <div className='flex-1'>
                <img src={Image2} alt="" className='h-full object-cover ' />
            </div>

            <div className='flex-1 flex flex-col gap-5 '>
                <div className='flex flex-col gap-5 '>
                   <h1 className='font-bold text-xl'>
                        First Home Buyer At Alpha Financial Solutions
                   </h1>
                   <p >
                        At Alpha Financial Solutions, we understand that purchasing your first home is one of the most significant financial decisions you’ll ever make. As a first-time homebuyer, navigating the complexities of the real estate market and mortgage options can be overwhelming. That’s why we offer tailored financial solutions and expert guidance to help you make informed decisions and achieve your dream of homeownership.
                   </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-center text-xl font-bold'> 
                        Services Offered To First Home Buyers 
                    </h1>

                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Personalized Mortgage Options:
                            </h1>
                            <p>
                                We offer a range of mortgage products specifically designed for first-time buyers, including fixed-rate and adjustable-rate mortgages. Our financial advisors work with you to find the best loan that fits your budget and long-term goals.
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Pre-Approval Assistance:                        </h1>
                            <p>
                                Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home.                        
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Down Payment Solutions:                        </h1>
                            <p>
                                Struggling with the down payment? Alpha Financial Solutions provides access to various programs and strategies to help you secure the funds needed for your down payment, whether through savings plans, grants, or special loan products                      
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                First-Time Buyer Incentives
                            </h1>
                            <p>
                                We help you take advantage of government programs and incentives specifically designed for first home buyers, such as tax credits, reduced-interest loans, and grants that can lower the overall cost of purchasing your home.                       
                            </p>
                        </div>
                    </div>



                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Expert Financial Guidance:  
                            </h1>
                            <p>
                                Our team of experienced financial advisors is here to support you at every step of the home-buying process. From understanding your budget to exploring mortgage options and closing the deal, we provide the expert advice you need to make confident decisions 
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Credit Counseling: 			
                            </h1>
                            <p>
                                If you’re concerned about your credit score, we offer credit counselling services to help you improve your credit profile, making it easier to qualify for favourable mortgage terms
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

        <div className='flex flex-col gap-4'>
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

            <div 
                ref={ref_4}
                className={`${inView_4?'downToUp':''} w-11/12 xl:w-4/5 flex flex-col xl:flex-row gap-10 mb-24 mx-auto`}>
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

export default Refinancing