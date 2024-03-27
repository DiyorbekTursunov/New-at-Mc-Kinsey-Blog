import Image from "next/image"
import logo from './images/logo.png'
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="border-t-2 border-t-[#000]">
            <footer className="max-w-[1224px] mx-auto py-20 px-3 ">
                <div className="mb-10 flex lg:flex-row md:flex-col max-md:flex-col md:items-start max-md:items-start md:gap-8 max-md:gap-8 justify-between items-center border-b-[1px] border-b-[#000] pb-7">
                    <div className="lg:w-auto md:w-full max-md:w-full">
                        <Image src={logo} alt="Logo" className="max-w-[207px] mb-7" />
                        <span className="text-[18px] font-semibold">Subscribe</span>
                        <p className="mt-5 text-[14px] text-[#575757] mb-5">Select topics and stay current with our latest insights</p>
                        <form className="flex gap-4">
                            <input type="email" className="border-2 border-[#000] h-12 lg:w-[273px] md:w-full max-md:w-full pl-3" placeholder="Email address" />
                            <button className="bg-[#1a44fd] h-12 w-[108px] text-[#fff] hover:border-[1px] hover:border-[#1a44fd] hover:bg-white hover:text-[#000] transition-all">Submit</button>
                        </form>
                    </div>
                    <div className="flex flex-col items-end">
                        <ul className="flex md:flex-wrap max-md:flex-wrap gap-4 text-[14px] font-semibold mb-4">
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">Contact us</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">FAQ</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">Privacy policy</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">Cookie preferences</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">Terms of use</Link>
                            </li>

                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd] lg:hidden ">Local language information</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd] lg:hidden ">Accessibility statement</Link>
                            </li>
                        </ul>
                        <ul className="flex gap-4 text-[14px] font-semibold mb-4 lg:flex md:hidden max-md:hidden">
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">Local language information</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:text-[#1a44fd] hover:border-b-[1px] hover:border-b-[#1a44fd]">Accessibility statement</Link>
                            </li>
                        </ul>
                        <ul className="flex gap-3">
                            <li>
                                <Link href={"/"}>
                                    <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex md:flex-row sm:flex-col max-sm:flex-col sm:gap-3 max-sm:gap-3 justify-between items-start">
                    <div className="flex lg:flex-row md:flex-col max-md:flex-col gap-4">
                        <div className="text-[12px]">
                            <p>McKinsey Insights - Get our latest thinking on your iPhone,</p>
                            <p>iPad, or Android device.</p>
                        </div>
                        <div className="flex  gap-4">
                            <img src="https://www.mckinsey.com/~/media/images/global/appleappstoreuptd.svg" alt="Play store logo" />
                            <img src="https://www.mckinsey.com/~/media/images/global/googleplaystoreupdtd.svg" alt="Google play logo" />
                        </div>
                    </div>
                    <p className="text-[12px]">© 1996-2024 McKinsey & Company</p>
                </div>
            </footer>
        </div>
    )
}