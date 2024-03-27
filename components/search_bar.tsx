import { Dispatch, SetStateAction } from "react";

type MenuProps = {
    setsearchBarIsOpen: Dispatch<SetStateAction<boolean>>;
}


const Search_bar: React.FC<MenuProps> = ({ setsearchBarIsOpen }) => {
    return (
        <>
            <div className='bg-[#000] fixed w-full h-full opacity-70 z-40 '></div>
            <div className="z-50 absolute w-full flex items-center">
                <input type="text" className='w-full h-[93px] pl-10 placeholder:text-2xl text-2xl' placeholder='Type to search' />
                <button onClick={() => setsearchBarIsOpen(false)} className="absolute right-28">
                    <svg width="52px" height="52px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
                </button>
                <button className='absolute right-10' >
                    <svg width="52px" height="52px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_15_152)"><rect width="24" height="24" fill="white"></rect><circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle><path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path></g><defs><clipPath id="clip0_15_152"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                </button>
            </div>
        </>
    )
}

export default Search_bar
