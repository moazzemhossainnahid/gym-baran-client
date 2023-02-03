import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../Assets/Images/logo2.svg";
import gallery from "../../Assets/Images/gallery.svg";

const Footer = () => {

    return (
        <footer className="" >
            <section className="">
                <div className={`container bg-[#1C3764] py-3`}>
                    <div className={`flex flex-col md:flex-row p-2 p-md-5 w-full pb-20`}>
                        <div className="w-full md:w-2/5 text-start pl-7">
                            <Image src={Logo} alt="logo" className="-mb-24 -mt-7 -ml-5" />
                            <p className="fs-14 mt-2 lh-26 text-muted text-white text-md-start">
                                We take care of your health <br /> with regular and fun exercise
                            </p>
                            <div className="flex justify-left gap-1">
                                <Image src={gallery} alt="logo"  className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo"  className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo"  className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo"  className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo"  className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/5 pt-10">
                            <h2 className="text-white font-bold text-xl">Program</h2>
                            <div className="flex flex-col justify-start text-left gap-1">
                                <h3 className="text-gray-200">Workout</h3>
                                <h3 className="text-gray-200">Gym</h3>
                                <h3 className="text-gray-200">Cardio</h3>
                                <h3 className="text-gray-200">Zumba</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-1/5 pt-10">
                            <h2 className="text-white font-bold text-xl">Program</h2>
                            <div className="flex flex-col justify-start text-left gap-1">
                                <h3 className="text-gray-200">Workout</h3>
                                <h3 className="text-gray-200">Gym</h3>
                                <h3 className="text-gray-200">Cardio</h3>
                                <h3 className="text-gray-200">Zumba</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-1/5 pt-10">
                            <h2 className="text-white font-bold text-xl">Program</h2>
                            <div className="flex flex-col justify-start text-left gap-1">
                                <h3 className="text-gray-200">Workout</h3>
                                <h3 className="text-gray-200">Gym</h3>
                                <h3 className="text-gray-200">Cardio</h3>
                                <h3 className="text-gray-200">Zumba</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
