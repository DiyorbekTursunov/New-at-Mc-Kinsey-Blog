import Image from 'next/image'
import Link from 'next/link'
import logoIcon from './images/logo_light.png'
import { Dispatch, SetStateAction } from 'react';

type MenuProps = {
    setmodalIsOpen: Dispatch<SetStateAction<boolean>>;
    modalIsOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ setmodalIsOpen, modalIsOpen }) => {
    return (
        
        <>
            <div className='bg-[#000] fixed w-full h-full opacity-70 z-40 '></div>
            <nav className=" flex md:flex-row sm:flex-col max-sm:flex-col  bg-[#f2f2f2] md:pb-0 sm:pb-10 max-sm:pb-10   w-full justify-start  absolute z-50">
                <div className='flex    flex-col'>
                    <div className="flex items-center  gap-1 bg-[#091d3b] w-full border-b-[1px] border-b-[#8f8f8f] pr-52">
                        <button className=" max-w-full h-[93px]  px-8 py-8" onClick={() => (setmodalIsOpen(!modalIsOpen))}>
                            <svg className="w-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </button>
                        <div className="pr-2">
                            <Link href={"/"} className="flex flex-col text-[25px] font-medium leading-7">
                                <Image src={logoIcon} alt="site logo" className="max-w-[142px]" />
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 bg-[#091d3b] w-full py-16 px-9'>
                        <ul className='text-[#fff] w-full flex flex-col gap-8 font-semibold'>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >
                                    Industries
                                    <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff'>
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >
                                    Capabilities
                                    <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff'>
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >
                                    Featured Insights
                                    <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff'>
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >Locations</Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >
                                    Careers
                                    <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff'>
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between text-[#47bbff]' >
                                    About Us
                                    <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#fff'>
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between text-[#47bbff]' >McKinsey Blog</Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >Email Subscriptions</Link>
                            </li>
                            <li>
                                <Link href={"/"} className='flex  transition-all justify-between hover:text-[#47bbff]' >Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full flex items-center'>
                        <input type="text" className='w-full h-[93px] pl-10 placeholder:text-2xl text-2xl' placeholder='Type to search' />
                        <button className='absolute right-10' >
                            <svg width="52px" height="52px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_15_152)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0_15_152"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                        </button>
                    </div>
                    <div className='px-14'>
                        <h2 className='text-3xl font-serif mt-[40px]'>McKinsey Blog</h2>
                        <hr className='h-[2px] my-5 bg-black' />
                        <p className='mb-5 text-[#5a5a5a]'>A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>
                        <Link href={"/"} className='flex gap-3 transition-all hover:gap-5 hover:text-[#47bbff]'>
                            Read more stories
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </Link>
                    </div>
                </div>
            </nav >
        </>

    )
}

export default Menu
