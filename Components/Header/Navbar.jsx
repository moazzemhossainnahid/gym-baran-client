import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/Images/logo.svg";

const Navbar = () => {
    const [show, setshow] = useState(false);
    return (
        <div className="bg-gray-100">
            <div className="container py-6 px-4">
                <nav>
                    <div className=" flex flex-row justify-between">
                        {/* <div className=" flex space-x-3 items-center">
                            <Link href="/" scroll legacyBehavior>
                                <Image src={logo}/>
                            </Link>
                        </div> */}
                        {/* For large (i.e. desktop and laptop sized screen) */}
                        <div className="lg:flex hidden flex-auto justify-between flex-row">

                            <div className="flex flex-row lg:space-x-3 xl:space-x-4">
                                <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                    <p>Share</p>
                                </button>
                            </div>
                        </div>
                        <div className=" hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-[#264373] focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Login</p>
                            </button>

                        </div>
                    </div>
                    {/* for medium-sized devices */}
                    <div className="lg:hidden flex flex-auto justify-between flex-row mt-4">
                        <div id="heading" className={`${show ? 'hidden' : 'block'} sm:block xl:pl-16 lg:pl-4`}>
                            <div className=" flex space-x-1 items-center">
                                <div className="cursor-pointer w-3 h-3 rounded-full bg-white flex justify-center items-center">
                                    <svg width={4} height={6} viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.8999 1.20001L1.0999 3.00001L2.8999 4.80001" stroke="#1F2937" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a className="focus:outline-none focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" href="javascript:void(0)">Back to Dashboard</a>
                            </div>
                            <h2 className=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                        </div>
                        <div className="hidden sm:flex flex-row space-x-6 ">
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Share</p>
                            </button>
                        </div>
                    </div>
                    {/* Mobile and Small devices Navigation */}
                    <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} transform duration-150 sm:hidden mt-4`}>
                        <hr className=" w-full bg-gray-300" />
                        <div className="flex flex-col gap-4 mt-4 max-w-sm mx-auto ">
                            <div className=" flex justify-center items-center -space-x-3 flex-row">
                                <img className="z-50" src="https://i.ibb.co/6JM49zg/Ellipse-16.png" alt="individual person image-1" />
                                <img className="z-40" src="https://i.ibb.co/GJQPgHw/Ellipse-15.png" alt="individual person image-2" />
                                <img className="z-30" src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3" />
                                <img className="z-20" src="https://i.ibb.co/60dJ3WT/Ellipse-13.png" alt="individual person image-4" />
                                <img className="z-10" src="https://i.ibb.co/ry4hYQs/Ellipse-10.png" alt="individual person image-5" />
                            </div>
                            <button className=" rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Share</p>
                            </button>
                            <hr className=" w-full bg-gray-300" />
                            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Preview</p>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
