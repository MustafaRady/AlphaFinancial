import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/navbar/logo.png'  // Import the image
import Menu from '../../assets/navbar/menu.png'
import { Link } from 'react-router-dom'  
import Location from '../../assets/navbar/location.png'
import Phone from '../../assets/navbar/phone.png'
import Clock from '../../assets/navbar/clock.png'

const Navbar = () => {
const [onTooltipOpen, setonTooltipOpen] = useState(false);
const [onMenuBarOpen , setOnMenuBarOpen] = useState(false);

const toggleTooltip = ()=>{
    setonTooltipOpen((prev)=>!prev);
}

const closeTooltip=()=>{
    setonTooltipOpen(false)
}


  return (
    <>
        <div className='w-full relative z-10' >
            <div className='w-full nav-bg-black flex flex-col lg:flex-row justify-center items-center text-white gap-x-5 pl-10 py-1 lg:py-5 gap-y-3'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <img src={Location} width={30} alt="" />
                    <h1>Sydney,Austrailia</h1>
                </div>

                <div className='flex flex-row items-center justify-center gap-2'>
                    <img src={Phone} width={30} alt="" />
                    <h1>0468328227</h1>
                </div>
                
                <div className='flex flex-row items-center justify-center gap-2'>
                    <img src={Clock} width={30} alt="" />
                    <h1>Mon - Fri: 9:00am - 5:00pm</h1>
                </div>
                
                <div className='flex flex-row items-center justify-center gap-2'>
                    <img src={Clock} width={30} alt="" />
                    <h1>Weekends Appointments Only</h1>
                </div>  
            </div>

            <div className='w-11/12 mx-auto'>
                <div className='w-full flex flex-row items-center justify-between font-semibold gap-x-5'>
                    <Link
                        to={'/about'}
                        onClick={()=>closeTooltip()}
                    >
                        <div className='img ' >
                            <img src={logo} alt="" width={300} height={300} />
                        </div>
                    </Link>
                    

                    <div className='hidden xl:flex flex-row gap-x-10 justify-center items-center h-full'>
                        <Link to={'/'}>
                            <h1 className='hover:bg-black hover:text-white p-2'  onClick={()=>closeTooltip()}>HOME</h1>

                        </Link>

                        <Link
                            to={'/about'}
                        >
                            <h1 className='hover:bg-black hover:text-white p-2'  onClick={()=>closeTooltip()}>ABOUT US</h1>

                        </Link>
                        
                        {/* SERVICES */}
                        <div className='relative group '>
                            <h1 className='hover:bg-black hover:text-white p-2 cursor-pointer'
                                onClick={()=>{
                                    toggleTooltip();
                                }}
                            >
                                SERVICES
                            </h1>

                            {onTooltipOpen &&
                            (
                                <div className='absolute flex flex-col  text-black mt-2 p-4 w-72 bg-white z-10'>
                                <Link
                                    to='/home-loans'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>HOME LOANS</h1>

                                </Link>
                                <hr className='bg-black ' />
                                <Link
                                    to='/first-home-buyer'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>FIRST HOME BUYER</h1>

                                </Link>
                                <hr className='bg-black ' />
                                
                                <Link
                                    to='/refinancing'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>REFINANCING</h1>

                                </Link>
                                <hr className='bg-black ' />
                                
                                <Link
                                    to='/commercial-loan'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>COMMERCIAL LOAN</h1>

                                </Link>
                                <hr className='bg-black ' />
                                
                                
                                <Link
                                    to='/asset-finance'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>ASSET FINANCE</h1>

                                </Link>
                                <hr className='bg-black ' />
                                
                                
                                <Link
                                    to='/personal-loan'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>PERSONAL LOAN</h1>

                                </Link>
                                <hr className='bg-black ' />


                                <Link
                                    to='/smsf'
                                    onClick={()=>closeTooltip()}
                                >
                                <h1  className='hover:bg-black hover:text-white p-4'>SEL-MANAGED SUPER FUND (SMFS) LENDING</h1>

                                </Link>
                                <hr className='bg-black ' />
                                
                                </div>
                            )}
                            
                        </div>

                        <Link
                                to='/faqs'
                            >
                            <h1 className='hover:bg-black hover:text-white p-2' onClick={()=>closeTooltip()}>FAQ'S</h1>

                        </Link>
                        
                    </div>

                    <div className='flex flex-row items-center gap-8'>
                        <div className='block xl:hidden cursor-pointer' onClick={()=>setOnMenuBarOpen((prev)=>!prev)}>
                            <img src={Menu} alt="" width={40} />
                        </div>
                        <div className='nav-button rounded-md p-4 cursor-pointer '>
                            CALL US ANYTIME
                        </div>
                    </div>
                    
                </div>

            </div>
            
            
        </div>

        {
            onMenuBarOpen && (
                <div className='absolute xl:hidden top-100 w-full h-auto left-0 bg-white z-10'>
                    <ul className='flex flex-col  xl:text-2xl  pb-4 pt-10 font-bold '>
                        <li className='hover:bg-orange-400 hover:text-white py-4 text-black cursor-pointer'><a  ><span className='pl-4'>Home</span></a> </li><hr />
                        <li className='hover:bg-orange-400 hover:text-white py-4 text-black cursor-pointer'><a  ><span className='pl-4'>About Us</span></a> </li><hr />
                        <li className='hover:bg-orange-400 hover:text-white py-4 text-black cursor-pointer'><span className='pl-4' onClick={()=>toggleTooltip()}>Services</span> </li><hr />
                        {onTooltipOpen &&
                            (
                                <div className=' flex flex-col  text-black px-4  bg-white z-10'>
                                <a href='/service1' className='hover:bg-black hover:text-white p-4'>HOME LOAN</a>
                                <hr  />
                                <a href='/service3' className='hover:bg-black hover:text-white p-4'>FIRST HOME BUYER</a>
                                <hr  />
                                <a href='/service4' className='hover:bg-black hover:text-white p-4'>REFINANCING</a>
                                <hr  />
                                <a href='/service5' className='hover:bg-black hover:text-white p-4'>COMMERCIAL LOAN</a>
                                <hr  />
                                <a href='/service6' className='hover:bg-black hover:text-white p-4'>ASSET FINANCE</a>
                                <hr  />
                                <a href='/service7' className='hover:bg-black hover:text-white p-4'>PERSONAL LOAN</a>
                                <hr  />
                                <a href='/service7' className='hover:bg-black hover:text-white p-4'>SEL-MANAGED SUPER FUND (SMFS) LENDING</a>
                                </div>
                            )}
                        <li className='hover:bg-orange-400 hover:text-white py-4 text-black cursor-pointer'><a  ><span className='pl-4'>FAQs</span></a> </li><hr />
                    </ul>
                </div>
            )     
        }
        

        
    </>
    
    
  )
}

export default Navbar