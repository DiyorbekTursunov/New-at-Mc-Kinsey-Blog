'use client';
import Link from "next/link"

import logoIcon from './images/logo.png'
import Image from "next/image"
import { useState } from "react";
import Menu from "./menu";
import Drop_down from "./drop_down";
import Search_bar from "./search_bar";

export const Navbar = () => {
    const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false)
    const [dropDownFirst, setdropDownFirst] = useState<boolean>(false)
    const [dropDownSecond, setdropDownSecond] = useState<boolean>(false)
    const [dropDownThird, setdropDownThird] = useState<boolean>(false)

    const [searchBarIsOpen, setsearchBarIsOpen] = useState<boolean>(false)
    return (
        <>
            {searchBarIsOpen ? <Search_bar setsearchBarIsOpen={setsearchBarIsOpen}/> : null}
            {modalIsOpen ? <Menu setmodalIsOpen={setmodalIsOpen} modalIsOpen={modalIsOpen} /> : null}
            <nav className="w-full border-b-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <button className="border-[1px] border-[#fff] hover:border-[1px] hover:border-[#8093ff] max-w-full h-full px-8 py-8" onClick={() => (setmodalIsOpen(!modalIsOpen))} >
                        <svg viewBox="0 0 20 20" className="w-[27px]" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                        </svg>
                    </button>
                    <div className="pr-2">
                        <Link href={"/"} className="flex flex-col text-[25px] font-medium leading-7">
                            <Image src={logoIcon} alt="site logo" className="max-w-[142px]" />
                        </Link>
                        <Link href={"/"} className="hover:text-[#47bbff] text-[12px] font-semibold hover:border-b-4 hover:border-b-[#47bbff] lg:hidden md:block max-md:block">About us</Link>
                    </div>
                </div>
                <div className="w-[1320px] lg:block md:hidden max-md:hidden ">
                    <Link href={"/"} className="hover:text-[#47bbff] text-[12px] font-semibold hover:border-b-4 hover:border-b-[#47bbff] ">About us</Link>
                    <ul className="flex gap-6 text-[14px] text-[#505050]">
                        <li>
                            <Link href={"/"} className="hover:text-[#47bbff] hover:pb-7 hover:border-b-4 hover:border-b-[#47bbff]">Overview</Link>
                        </li>
                        <li className="">
                            <Link href={"/"} className="hover:text-[#47bbff] hover:pb-7 hover:border-b-4 hover:border-b-[#47bbff] relative" onClick={() => { setdropDownFirst(!dropDownFirst), setdropDownSecond(false), setdropDownThird(false) }}>
                                Who we are
                                {dropDownFirst && <Drop_down />}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-[#47bbff] hover:pb-7 hover:border-b-4 hover:border-b-[#47bbff] relative"  onClick={() => { setdropDownFirst(false), setdropDownSecond(!dropDownSecond), setdropDownThird(false) }}>
                                Our commitments
                                {dropDownSecond && <Drop_down />}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-[#47bbff] hover:pb-7 hover:border-b-4 hover:border-b-[#47bbff] relative" onClick={() => { setdropDownFirst(false), setdropDownSecond(false), setdropDownThird(!dropDownThird) }}>
                                How we work
                                {dropDownThird && <Drop_down />}
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-[#47bbff] hover:pb-7 hover:border-b-4 hover:border-b-[#47bbff]">Alumni</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-[#47bbff] hover:pb-7 hover:border-b-4 hover:border-b-[#47bbff]">Media</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="text-[#47bbff] pb-7 border-b-4 border-b-[#47bbff]">McKinsey Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col text-[14px] items-end gap-3 pr-5">

                    <div className="md:block sm:hidden max-sm:hidden">
                        <span>

                            <Link href={"/"} className="text-[#8093ff] hover:border-b-[#8093ff] hover:border-b-[1px]">Sing in</Link> |{" "}
                            <Link href={"/"} className="text-[#8093ff] hover:border-b-[#8093ff] hover:border-b-[1px]">Subscribe</Link>
                        </span>
                    </div>
                    <button onClick={() => setsearchBarIsOpen(!searchBarIsOpen)}>
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_15_152)">
                                <rect width="24" height="24" fill="white" />
                                <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round" />
                                <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000" />
                            </g>
                            <defs>
                                <clipPath id="clip0_15_152">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    )
}
