import Link from 'next/link'
import React from 'react'
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    return (
        <nav className=" z-50 sticky top-5  w-full px-2 ">
            <div className='flex items-center max-w-lg  bg-background/75 backdrop-blur-md justify-between border border-border/75 rounded-xl px-4 h-[48px] mx-auto'>
                <Link href={"/"} className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-constructive/10 to-constructive flex items-center space-x-3">
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.32898 3.8147e-06L27.671 2.86102e-06C27.8643 0.000331879 28.054 0.0396061 28.2202 0.113726C28.3864 0.187846 28.523 0.294092 28.6158 0.421369L31.8663 4.87813C31.954 4.99721 32 5.13103 32 5.26708C32 5.40313 31.954 5.53696 31.8663 5.65604L28.6158 10.1128C28.523 10.2401 28.3864 10.3463 28.2202 10.4204C28.054 10.4946 27.8643 10.5338 27.671 10.5342L4.32898 10.5342C4.13566 10.5338 3.94601 10.4946 3.77983 10.4204C3.61365 10.3463 3.47703 10.2401 3.38424 10.1128L0.133657 5.65604C0.0459866 5.53696 0 5.40313 0 5.26708C0 5.13104 0.0459866 4.99721 0.133657 4.87813L3.38424 0.421371C3.47703 0.294094 3.61365 0.187847 3.77983 0.113728C3.94601 0.039608 4.13566 0.000332832 4.32898 3.8147e-06Z"
                            fill="#E465B1"
                        />
                        <path
                            d="M10.7329 27.671L10.7329 4.32897C10.7332 4.13566 10.7725 3.94601 10.8466 3.77983C10.9207 3.61365 11.027 3.47702 11.1542 3.38423L15.611 0.133656C15.7301 0.0459843 15.8639 0 16 0C16.136 0 16.2698 0.0459843 16.3889 0.133656L20.8457 3.38423C20.973 3.47702 21.0792 3.61365 21.1533 3.77983C21.2274 3.94601 21.2667 4.13566 21.267 4.32897L21.267 27.671C21.2667 27.8643 21.2274 28.054 21.1533 28.2202C21.0792 28.3864 20.973 28.523 20.8457 28.6158L16.3889 31.8663C16.2698 31.954 16.136 32 16 32C15.8639 32 15.7301 31.954 15.611 31.8663L11.1543 28.6158C11.027 28.523 10.9207 28.3864 10.8466 28.2202C10.7725 28.054 10.7332 27.8643 10.7329 27.671Z"
                            fill="#EB5CB2"
                        />
                    </svg>
                    <span className="text-sm tracking-tight opacity-90 font-semibold select-none text-[#E465B1]">
                        Tooningo
                    </span>
                </Link>
                <div className="flex items-center space-x-4">
                    <button className="hidden sm:block text-sm opacity-100 outline-none hover:opacity-75 transition-all tracking-normal">
                        How it works
                    </button>
                    <Link href={"/translate"} className="hidden sm:block text-sm opacity-100 outline-none hover:opacity-75 transition-all tracking-normal">
                        Translate
                    </Link>
                    <Link href={"/login"} className="text-sm opacity-100 outline-none hover:opacity-75 transition-all tracking-normal inline-flex items-center space-x-0.5">
                        <span>Log in</span>
                        <ChevronRightIcon className="h-3.5 w-3.5 " />

                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar