import Image from "next/image";
import React from "react";
import Logo from "../../Assets/Images/logo2.svg";
import gallery from "../../Assets/Images/gallery.svg";
import shape from "../../Assets/Images/shape.svg";

const Footer = () => {

    return (
        <footer className="" >
            <section className="">
                <div className={`container bg-[#1C3764] py-3 relative`}>
                    <div className="hidden md:block">
                        <Image src={shape} alt="shape" className="absolute -mt-3 z-0" />
                    </div>
                    <div className={`flex flex-col md:flex-row p-2 p-md-5 w-full py-20`}>
                        <div className="w-full md:w-2/5 text-start md:pl-7 z-0">
                            <Image src={Logo} alt="logo" className="-mb-24 -mt-7 -ml-5" />
                            <p className="fs-14 mt-2 lh-26 text-muted text-white text-md-start">
                                We take care of your health <br /> with regular and fun exercise
                            </p>
                            <div className="flex justify-left gap-1">
                                <Image src={gallery} alt="logo" className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo" className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo" className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo" className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
                                <Image src={gallery} alt="logo" className="h-8 w-8 p-1 m-1 bg-[#E275CD]" />
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
                    <div className="hidden md:block">
                        <Image src={shape} alt="shape" className="absolute right-0 bottom-0 z-0" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
