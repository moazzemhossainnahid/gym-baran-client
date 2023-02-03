import Image from "next/image";
import React from "react";
import Logo from "../../Assets/Images/logo2.svg";
import gallery from "../../Assets/Images/gallery.svg";
import shape from "../../Assets/Images/shape.svg";

const Testimonials = () => {

    return (
        <div className="" >
            <section className="">
                <div className={`container bg-[#E5E5E5] py-3 relative`}>
                    <div className="w-full mx-auto text-center text-3xl md:text-5xl">
                        <h2 style={{ fontFamily: "SportingGrotesque" }} className="">Testimonials</h2>
                    </div>
                    <div className={`flex flex-col md:flex-row justify-around items-center p-2 p-md-5 w-full md:w-4/5 mx-auto py-20`}>
                        <div className="w-full md:w-2/5 bg-white rounded-xl px-2 pt-10">
                            <h2 className="text-gray-500 font-semibold"><span className="text-2xl text-gray-500">"</span>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</h2>
                            <div className="flex flex-row justify-around items-center p-3 text-left gap-1 w-full">
                                <div className="w-1/3">
                                    <div className="bg-[#E275CD] w-16 h-16 rounded-2xl">

                                    </div>
                                </div>
                                <div className="w-2/3 space-y-2">
                                    <h2 className="font-bold">Suketi Mantapo</h2>
                                    <p className="text-gray-500">Designer Graphic</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 bg-white rounded-xl px-2 pt-10">
                            <h2 className="text-gray-500 font-semibold"><span className="text-2xl text-gray-500">"</span>exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.</h2>
                            <div className="flex flex-row justify-around items-center p-3 text-left gap-1 w-full">
                                <div className="w-1/3">
                                    <div className="bg-[#E275CD] w-16 h-16 rounded-2xl">

                                    </div>
                                </div>
                                <div className="w-2/3 space-y-2">
                                    <h2 className="font-bold">Ada Apose</h2>
                                    <p className="text-gray-500">Designer Graphic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
