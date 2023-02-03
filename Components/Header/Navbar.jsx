import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import logo from "../../Assets/Images/logo.svg";

const Navbar = () => {
    const [show, setshow] = useState(false);
    return (
        <div className="bg-transparent">
            <div className="container py-6 px-4">
                <nav>
                    <div className=" flex flex-row justify-between">
                        <div className="d-none d-md-block">
                            <Link href="/" scroll legacyBehavior>

                                <Image
                                    className="-mt-12 -ml-10"
                                    src={logo}
                                    alt="logo"
                                    title="logo"
                                    height="50"
                                    width="278"
                                />

                            </Link>
                        </div>
                        {/* For large (i.e. desktop and laptop sized screen) */}
                        <div className="lg:flex hidden flex-auto justify-end flex-row">

                            <div className="flex flex-row lg:space-x-3 xl:space-x-4">
                                <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                    <p>Home</p>
                                </button>
                                <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                    <p>Program</p>
                                </button>
                                <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                    <p>Blog</p>
                                </button>
                                <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                    <p>About US</p>
                                </button>
                            </div>
                        </div>
                        <div className=" hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-[#264373] hover:text-black focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Login</p>
                            </button>
                        </div>
                        <div className=" block md:hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            <div className="ms-auto text-black mr-10">
                                <AiOutlineBars
                                    size={24}
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
