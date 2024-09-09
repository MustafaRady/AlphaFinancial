import React from 'react'
import './style.css'
import Image1 from '../../assets/home/image1.jpg'
import Roof from '../../assets/home/roof.png'
import Image2 from '../../assets/home/image2.jpg'

import Money from '../../assets/home/money.png'
import Invoice from '../../assets/home/invoice.png'
import Control from '../../assets/home/control.png'
import Family from '../../assets/home/family.jpg'
import SmallHouse from '../../assets/home/smallHome.png'
import Family2 from '../../assets/home/image3.jpg'
import Ceo from '../../assets/home/CEO.jpg'
import Image4 from '../../assets/home/image4.jpg'

import phone from '../../assets/footer/phone.png'
import twitter from '../../assets/social Media/twitter.png'
import whatsapp from '../../assets/social Media/whatsapp.png'
import wordpress from '../../assets/social Media/wordpress.png'
import gitlab from '../../assets/social Media/gitlab.png'

import { useInView } from 'react-intersection-observer'


const Card = ({title , data , icon}) =>{


    return(
        <div className='  bg-white rounded-2xl bottom-border p-7 flex flex-col gap-2'>
            <div className='flex flex-col justify-center gap-4'>
                <div className='flex flex-row items-center gap-6'>
                    <img src={icon} width={50}  height={50} alt="" />
                    <h1 className='font-bold text-sm md:text-3xl'>{title}</h1>
                </div>
            </div>
            <hr className='bg-black' />
            <div className='flex flex-col gap-4 text-gray-500'>
                {data}
            </div>
        </div>
    )
}

const Home = () => {

    const [ref_1, inView_1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_2, inView_2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_3, inView_3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_4, inView_4] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref_5, inView_5] = useInView({ triggerOnce: true, threshold: 0.1 });

    const data = [
        'At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals',
        'Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms, such as a lower interest rate, a different loan term, or to switch from an adjustable-rate mortgage to a fixed-rate mortgage. Homeowners often refinance to reduce their monthly mortgage payments, pay off their loan more quickly, or access equity in their home through a cash-out refinance. ',
        'At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. Whether you’re looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.',
        'At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs. Whether you’re looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you. ',
        'At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you’re seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth. ',
        'A first-time homebuyer is an individual or household purchasing a home for the first time. First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible.',
        'An investment property is a real estate asset purchased with the intention of generating income or profit, rather than being used as a primary residence. These properties can include residential homes, apartment buildings, commercial spaces, or land. Investors typically buy these properties to earn rental income, benefit from property appreciation over time, ',
        'At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options. ',
        'At Alphaa Financial Solutions, we offer specialized expat loan services designed to meet the unique needs of expatriates. Whether you’re looking to purchase a property, invest, or manage financial obligations in a new country, our expert team provides tailored solutions and comprehensive support. '
        ]

  return (
    <>
    <div className='w-full flex flex-col'>
        <div className='relative '>
            <img src={Image1} alt="" />
            <div className='absolute w-full h-full top-0 text-white '>
                <div className='w-2/3 h-full  m-auto flex flex-col items-center justify-center '>
                    <h1 className='md:text-2xl text-center font-bold'> Empowering Financial Security for Everyone </h1>
                    <p className='text-sm md:text-lg text-center'>We are committed to providing accessible and reliable financial services to help individuals and families</p>
                </div>
                
            </div>
        </div>
    </div>
    <hr className='bg-orange-400 h-2 w-full' />
    <div 
        ref={ref_1}
        className={`${inView_1?'downToUp':''} w-full body-background flex flex-col xl:flex-row gap-3 my-2 pb-3 `}>
        <div 
            
            className={` bg-white text-black mt-2 flex flex-col bottom-border gap-6 rounded-2xl p-3 w-11/12 mx-auto`}>
            <div className='group p-5 flex flex-col gap-y-5'>
                <h1 className='font-extrabold'>
                    Our Story
                </h1>
                <p>
                    Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.
                </p>
                <div className='button font-bold'>
                    KNOW MORE
                </div>
            </div>
        </div>

        <div className='animation bg-white text-black mt-2 flex flex-col bottom-border gap-6 rounded-2xl p-3 w-11/12 mx-auto '>
            <div className='group p-5 flex flex-col gap-y-5'>
                <h1 className='font-extrabold'>
                    Our Mission
                </h1>
                <p>
                    At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success.               
                </p>
                
            </div>
        </div>
    </div>

    <div className='w-full bg-gray-100'>
        <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
            <img src={Roof} width={40} height={40} alt="" />

            <h1 className='text-4xl font-semibold'>
                Our Services
            </h1>
        </div>
    </div>

    <div className='w-full bg-gray-100 py-16'>
        <div className='flex flex-col lg:flex-row gap-x-3'>
            <div className='flex-1 flex flex-col gap-y-5'>
                <Card title={'Home Loans'} data={data[0]} icon={Money} />
                <Card title={'Refinancing'} data={data[1]} icon={Invoice}/>
                <Card title={'Self Managed Super fund SMSF'} data={data[2]} icon={Invoice}/>
                <Card title={'Personal loans'} data={data[3]} icon={Invoice}/>
                <Card title={'Commercial/Business Loans'} data={data[4]} icon={Control}/>

            </div>



            <div className='flex-1 flex flex-col gap-10 lg:gap-y-36'>
                <Card title={'Home Loans First Home Buyer'} data={data[5]} icon={Money} />
                <Card title={'Investment Property'} data={data[6]} icon={Invoice}/>
                <Card title={'Asset Finance'} data={data[7]} icon={Invoice}/>
                <Card title={'Expat Loans'} data={data[8]} icon={Invoice}/>
            </div>

        </div>
    </div>

    <div className='w-full flex flex-col'>
        <div className='relative w-11/12 mx-auto  '>
            <img src={Image2} alt="" className='rounded-xl'/>
            <div className='absolute w-full h-full top-0 text-white '>
                <div className='w-4/5 h-full m-auto flex flex-col items-center justify-center '>
                    <h1 className='lg:text-2xl text-center font-bold'> 
						At Alphaa Financial Solutions, we offer a comprehensive range of financial services	
				    </h1>
                    <p className='text-sm text-center'>
                        We have the expertise to guide you through the process.					
                    </p>
                </div>
                
            </div>
        </div>
    </div>

    <div className='w-full my-10'>
        <div  
            className='relative w-11/12 mx-auto flex flex-row justify-end'>
            <div className='flex justify-end items-center w-4/5'>
                <img 
                    src={Family} 
                    alt="Family" 
                    className='rounded-xl w-full' 
                    width={500} 
                    height={300} 
                />
            </div>

            <div 
                ref={ref_2}
                className={`absolute bottom-0 left-10 ${inView_2?'leftToRight':''}`}>
                <img 
                    src={SmallHouse}
                    width={300} 
                    height={200}  
                    className='w-32 md:w-64'
                    alt="Small House" 
                />
            </div>
        </div>
    </div>

    <div className='w-full flex flex-col px-5 gap-10 py-10 pb-20 justify-end items-center black-background'>

        {/* Title Section */}
        <div className='w-2/3 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>We Believe You're Bright</h1>
        </div>

        {/* Image Container */}
        <div 
            ref={ref_3}
            className={` ${inView_3 ? 'leftToRight' : ''} w-full flex flex-col gap-2 items-center justify-end pb-10 relative`}>
            
            {/* Responsive Image */}
            <img 
            src={Family2} 
            className='w-full md:w-4/5 lg:h-96 rounded-xl object-cover' 
            alt="Family" 
            />

            {/* White Boxes Positioned at the Bottom */}
            <div className='absolute bottom-0 left-0 w-full flex flex-col md:flex-row justify-around gap-5 pb-5 px-5'>
            <div className='bg-white rounded-xl p-5 text-center flex flex-col gap-3 bottom-border-orange w-full md:w-1/3'>
                <h1 className='text-3xl md:text-5xl font-bold'>320+</h1>
                <h2 className='text-xl md:text-3xl'>Lenders</h2>
            </div>

            <div className='bg-white rounded-xl p-5 text-center flex flex-col gap-3 bottom-border-orange w-full md:w-1/3'>
                <h1 className='text-3xl md:text-5xl font-bold'>20+</h1>
                <h2 className='text-xl md:text-3xl'>Years Experience</h2>
            </div>
            </div>
        </div>
    </div>


    <div className='w-full bg-white mt-6'>
        <div className=' w-4/5 mx-auto flex flex-col gap-10'>
            <div className='flex flex-col justify-center items-center'>
                <img src={Money} 
                    width={30} 
                    height={30} 
                    className='w-16 h-16 lg:w-32 lg:h-32'
                    alt="" />
                <h1 className='font-bold text-2xl md:text-5xl'>
                    Meet Our Founder
                </h1>
            </div>

            <div className='flex flex-row '>
                <div className='flex-1 flex flex-col gap-10 items-center justify-center bottom-border-orange rounded-xl mb-6 '>
                    <img src={Ceo}  alt="" />
                    <div className='flex flex-col gap-2 items-center '>
                        <h1>Mr. Pawan Punjabi</h1>
                        <p>Founder</p>
                    </div>
                
                </div>

                <div className='flex-1'>

                </div>
            </div>
            
        </div>
    </div>

    <div 
        ref={ref_4}
        className={`${inView_4?'downToUp':''} w-full flex md:flex-row flex-col my-10 gap-y-3`}>
        <div className='flex-1 flex flex-col gap-4 px-3'>
            <h1 className='text-2xl md:text-4xl font-bold'> 
                Contact Us
            </h1>

            <p className=''>
                Please feel free to ask if you have any further questions 
            </p>

            <div className='flex flex-col gap-2 font-bold pl-4 text-sm '>
                <div className='flex flex-row gap-4'>
                    <img src={""} alt="" />
                    <h1> Sydney,Australia</h1>
                </div>
                
                <div className='flex flex-row gap-4'>
                    <img src={""} alt="" />
                    <h1> 0468328227</h1>
                </div>

                <div className='flex flex-row gap-4'>
                    <img src={""} alt="" />
                    <h1> Mon - Fri: 9:00am - 5:00pm</h1>
                </div>

                <div className='flex flex-row gap-4'>
                    <img src={""} alt="" />
                    <h1>Weekend Appointments Only</h1>
                </div>

                <div className='flex flex-row gap-2'>
                    <div className='bg-orange-400 p-1'>
                        <img src={phone} width={30} height={30} alt="" />
                    </div>
                    <div className='bg-orange-400 p-1'>
                        <img src={twitter} width={30} height={30} alt="" />
                    </div>
                    <div className='bg-orange-400 p-1'>
                        <img src={gitlab} width={30} height={30} alt="" />
                    </div>
                    <div className='bg-orange-400 p-1'>
                        <img src={whatsapp} width={30} height={30} alt="" />
                    </div>
                    <div className='bg-orange-400 p-1'>
                        <img src={wordpress} width={30} height={30} alt="" />
                    </div>
                </div>
            </div>

            
        </div>

        <div className='flex-1 '>
            <img src={Image4} className='h-full' alt="" />
        </div>
    </div>

    <div 
        ref={ref_5} 
        className={`${inView_5?'downToUp':''} w-full footer p-12`}>
        <div className='w-4/5 flex flex-col gap-4 mx-auto items-center text-center'>
            <div className='bg-black p-8'>

            </div>

            <div
                
                className={` flex flex-col gap-4`}>
                <h1 className='text-4xl font-bold'>
                    Talk To PAWAN NOW!
                </h1>

                <div 
                    className={`footer-button p-5 font-bold rounded-md`}>
                    CONTACT US 
                </div>
            </div>
            

            <h3 >
                Feel Free to Get in Touch for a No Obligations <span className='underlined'>Call <span className='font-bold'>PAWAN</span> !!!</span>
            </h3>
        </div>
    </div>

    </>
    
  )
}

export default Home