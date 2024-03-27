'use client';
import Link from "next/link";
import cards from "@/DB/cards_data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#f5f5f5] overflow-hidden">
      <main className="max-w-[1224px] mx-auto pb-20 px-3">
        <div className="flex items-center pt-7">
          <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" />
            <path d="M14.5 17L9.5 12L14.5 7" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <Link href={"/"} className="text-[12px] text-[#000] hover:border-b-[#000] hover:border-b-[1px]">Back to About Us</Link>
        </div>
        <h1 className="lg:text-[76px] md:text-[56px] sm:text-[46px] max-sm:text-[46px] font-serif font-medium">New at McKinsey Blog</h1>
        <p className="text-[18px] text-[#383  838] mb-14">A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>

        <ul className="mb-10 flex gap-3">
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
        </ul>
        <div className="flex justify-between font-semibold border-b-[#797979] border-b-[1px] pb-2 mb-4">
          <p>BROWSE ALL POSTS</p>
          <span className="text-[14px]">Browse by:{" "}
            <Link href={"/"} className="text-[#8093ff] hover:border-b-[#8093ff] hover:border-b-[1px]">Topic</Link> <span className="font-normal">| </span>
            <Link href={"/"} className="text-[#8093ff] hover:border-b-[#8093ff] hover:border-b-[1px]">Date</Link>
          </span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1  gap-10">
          {cards.map((card => {
            return (
              <>
                {!card.isOtherCard ?
                  <div className="max-w-[386px] mx-auto  bg-white shadow-xl cursor-pointer hover:shadow-2xl">
                    <img src={card.imageUrl} alt="card image" />
                    <div className="p-4">
                      <Link href={"/"} className="text-[22px] font-semibold  hover:text-[#6d83ff]">{card.mainTitle}</Link>
                      <p className="mt-4 text-[#494949] text-[14px]">{card.dascription}</p>
                      <p className="pt-4 text-[#494949] text-[14px]">{card.authorName}</p>
                    </div>
                  </div>
                  :
                  <div className="text-center mx-auto max-w-[386px] h-[]  flex flex-col pt-24 items-center bg-[#091d3b] text-[#fff] px-4">
                    <h2 className="font-serif text-3xl mb-4">Never miss a story</h2>
                    <p className="mb-10 text-[#e7e7e7]">Stay updated about McKinsey news as it happens</p>
                    <form className="flex gap-3">
                      <input type="email" className="h-[48px] w-full text-[#474747]  pl-2" placeholder="Email address" />
                      <button className="bg-[#558bff] hover:bg-white transition-all w-[74px] h-[48px] flex justify-center items-center">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </form>
                  </div>}
              </>
            )
          }))}
        </div>
      </main>
    </div>
  );
}



// <div className="grid grid-cols-5 grid-rows-5 gap-4">
//     <div className="row-span-2">1</div>
//     <div className="row-span-2 col-start-1 row-start-3">2</div>
//     <div className="col-start-3 row-start-1">3</div>
//     <div className="row-span-2 col-start-2 row-start-1">4</div>
//     <div className="row-span-2 col-start-2 row-start-3">7</div>
//     <div className="row-span-2 col-start-3 row-start-2">8</div>
//     <div className="row-span-2 col-start-1 row-start-5">9</div>
//     <div className="row-span-2 col-start-2 row-start-5">10</div>
//     <div className="row-span-2 col-start-3 row-start-4">11</div>
//     <div className="row-span-2 col-start-1 row-start-7">12</div>
//     <div className="row-span-2 col-start-2 row-start-7">13</div>
//     <div className="row-span-2 col-start-3 row-start-6">14</div>
//     <div className="row-span-2 col-start-1 row-start-9">15</div>
//     <div className="row-span-2 col-start-3 row-start-8">17</div>
//     <div className="row-span-2 row-start-9">18</div>
// </div>
