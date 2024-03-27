import Link from 'next/link'
import React from 'react'

const Drop_down = ({ }) => {
    return (
        <div className='absolute w-[400px] left-0 top-14 right-0'>
            <ul className='p-10 bg-[#091d3b] flex flex-col gap-4 text-[#fff]'>
                <li>
                    <Link href={"/"} className='hover:text-[#47bbff]'>Our Leadership</Link>
                </li>
                <li>
                    <Link href={"/"} className='hover:text-[#47bbff]'>Purpose, Mission & Values</Link>
                </li>
                <li>
                    <Link href={"/"} className='hover:text-[#47bbff]'>Our History</Link>
                </li>
                <li>
                    <Link href={"/"} className='hover:text-[#47bbff]'>Our Aspiration</Link>
                </li>
                <li>
                    <Link href={"/"} className='hover:text-[#47bbff]'>Our Governance</Link>
                </li>
            </ul>
        </div>
    )
}

export default Drop_down
