import React from 'react'
import "./style.css"
import Image from '../../assets/refinancing/image1.jpg'
import Image1 from '../../assets/personalLoan/image1.jpg'
import Image2 from '../../assets/personalLoan/image2.jpg'
import Roof from '../../assets/refinancing/roof.png'
import Image3 from '../../assets/personalLoan/image3.jpg'
import Image4 from '../../assets/personalLoan/image4.jpg'
import { useInView } from 'react-intersection-observer'

const PersonalLoan = () => {

    const [ref_1, inView_1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_5, inView_5] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className='greyBackground w-full'>
            <div className='w-11/12 mx-auto pt-5 '>
                <div className='text-5xl font-bold pb-12'>
                    Personal Loan 
                </div>
            </div>

            <div className='w-full relative'>
                {/* Image with reduced opacity */}
                <img src={Image} className='w-full h-full object-cover opacity-65' alt="" />

                <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50' />

                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <h1 ref={ref_1} className={`${inView_1 ? 'downToUp' : ''} font-bold text-white text-6xl`}>
                        Personal Loan
                    </h1>
                </div>
            </div>

            <div className='w-11/12 mt-8 mx-auto flex flex-col-reverse xl:flex-row  gap-10'>
                <div ref={ref_2} className={`${inView_2 ? 'downToUp' : ''} flex-1`}>
                    <img src={Image1} alt="" className='h-full object-cover ' />
                </div>

                <div ref={ref_3} className={`${inView_3 ? 'downToUp' : ''} flex-1 flex flex-col gap-5 `}>
                    <div className='flex flex-col gap-5 '>
                        <h1 className='font-bold text-xl'>
                            Achieve Your Personal Goals with Alphaa Financial Solutions' Personal Loans                  
                        </h1>
                        <p >
                            At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs. <br />
                            Whether you're looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you. <br />
                            We provide personalized support throughout the application process, ensuring you secure the best rates and terms available. <br />
                            Trust us to make your financial goals more achievable with tailored, flexible personal loan solutions.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        {/* Additional Sections */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='flex-1 flex flex-col gap-4'>
                                <h1 className='text-base font-bold'>
                                    Flexible Loan Amounts for Your Needs
                                </h1>
                                <p>
                                    Borrow the exact amount you need, whether it’s for a small expense or a significant purchase. Our personal loans offer the flexibility to choose the loan amount that best suits your needs.
                                </p>
                            </div>

                            <div className='flex-1 flex flex-col gap-4'>
                                <h1 className='text-base font-bold'>
                                    Quick and Easy Application Process             
                                </h1>
                                <p>
                                    Apply for a personal loan with ease through our streamlined application process. We prioritize fast approvals, so you can access the funds you need without delay                            
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='flex-1 flex flex-col gap-4'>
                                <h1 className='text-base font-bold'>
                                    Competitive Interest Rates for Affordable Repayments
                                </h1>
                                <p>
                                    Our personal loans come with competitive interest rates that make repayments manageable, helping you achieve your financial goals without unnecessary stress.
                                </p>
                            </div>

                            <div className='flex-1 flex flex-col gap-4'>
                                <h1 className='text-base font-bold'>
                                    Repayment Plans Tailored to Your Budget
                                </h1>
                                <p>
                                    Choose from a variety of repayment plans that fit your budget and financial situation. We offer flexible terms to ensure your loan is repaid comfortably and on your terms                           
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 w-full'>
                <div ref={ref_4} className={`${inView_4 ? 'downToUp' : ''} w-11/12 mx-auto flex flex-col gap-4 xl:flex-row text-white p-8 rounded-xl items-center justify-center`} style={{ backgroundColor: "#2a2c38" }}>
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

            <div ref={ref_5} className={`${inView_5 ? 'downToUp' : ''} flex flex-col gap-4`}>
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

export default PersonalLoan
