import React from 'react'
import "./style.css"
import Image1 from '../../assets/refinancing/image1.jpg'
import Image2 from '../../assets/commercial/image1.jpg'
import Roof from '../../assets/refinancing/roof.png'
import Image3 from '../../assets/homeLoans/image3.jpg'
import Image4 from '../../assets/homeLoans/image4.jpg'
import { useInView } from 'react-intersection-observer'



const Commercial = () => {
    const [ref_1, inView_1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='greyBackground w-full'>
        <div className='w-11/12 mx-auto pt-5 '>
            <div className='text-5xl font-bold pb-12'>
                Commercial Loan
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
                    Commercial Loan
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
                
                <div className='flex flex-row gap-4'>
                    <div className='bg-orange-400 p-3'>
                        
                    </div>
                    <div className='font-bold'>
                        Financing Solutions For Your Business Growth
                    </div>
                </div>
                
                <div className='flex flex-col gap-5 '>
                   <h1 className='font-bold text-xl'>
                    Empower Your Business with Tailored Commercial Loans from Alphaa Financial Solutions					                   
                    </h1>
                   <p >
                        At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you're seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth.                    
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Custom Loan Packages for Your Business Needs					                            
                            </h1>
                            <p>
                                We offer a range of commercial loan packages tailored to suit the specific needs of your business, from real estate acquisitions to equipment financing.
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Competitive Interest Rates for Sustainable Growth					
                            </h1>
                            <p>
                                Our commercial loans come with competitive interest rates that help your business grow sustainably without compromising your cash flow.					                            
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row gap-4'>
                        
                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Flexible Repayment Terms for Better Cash Flow Management
                            </h1>
                            <p>
                                Choose from a variety of repayment terms that align with your business’s cash flow, ensuring that loan repayments are manageable and predictable.
                            </p>
                        </div>

                        <div className='flex-1 flex flex-col gap-4'>
                            <h1 className='text-base font-bold'>
                                Expert Support Throughout the Loan Process					
                            </h1>
                            <p>
                                Our team of commercial loan experts is dedicated to guiding you through every step of the loan process, from application to disbursement, ensuring a smooth and efficient experience.
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
                className={` ${inView_4?'downToUp':''} w-11/12 xl:w-4/5 flex flex-col xl:flex-row gap-10 mb-24 mx-auto`}>
                
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

export default Commercial