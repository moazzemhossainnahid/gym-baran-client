import Image from "next/image";
import React from "react";
import round1 from "../../Assets/Images/Rectangle2.png";
import round2 from "../../Assets/Images/Rectangle1.png";
import round3 from "../../Assets/Images/Rectangle3.png";
import group from "../../Assets/Images/Group.svg";
import group1 from "../../Assets/Images/Group (1).svg";
import group2 from "../../Assets/Images/Group (2).svg";
import group3 from "../../Assets/Images/Group (3).svg";
import group4 from "../../Assets/Images/Group (4).svg";
import group5 from "../../Assets/Images/Group (5).svg";

const Programs = () => {

    return (
        <div className="" >
            <section className="">
                <div className={`container bg-[#E5E5E5] py-3 relative`}>
                    <div className="w-full md:w-1/3 mx-auto text-center text-3xl md:text-5xl">
                        <h2 style={{ fontFamily: "SportingGrotesque" }} className="">Programs that can be taken</h2>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cls-3 justify-around items-center p-2 p-md-5 w-full md:w-4/5 mx-auto py-20`}>
                        <div className="flex flex-row justify-around items-center p-3 text-left gap-1 w-full">
                            <div className="w-1/3 items-center justify-center flex">
                                <div className="absolute">
                                    <Image
                                        className="w-24 h-24 p-5"
                                        src={group}
                                        alt="logo"
                                        title="logo"
                                    />
                                </div>
                                <Image
                                    className="w-32 h-32"
                                    src={round1}
                                    alt="logo"
                                    title="logo"
                                />
                            </div>
                            <div className="w-2/3 space-y-2">
                                <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                                <p className="text-gray-500">Exercise is a very important need for our body. </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around items-center p-3 text-left gap-1 w-full">
                            <div className="w-1/3 items-center justify-center flex">
                                <div className="absolute">
                                    <Image
                                        className="w-24 h-24 p-5"
                                        src={group1}
                                        alt="logo"
                                        title="logo"
                                    />
                                </div>
                                <Image
                                    className="w-32 h-32"
                                    src={round2}
                                    alt="logo"
                                    title="logo"
                                />
                            </div>
                            <div className="w-2/3 space-y-2">
                                <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                                <p className="text-gray-500">Exercise is a very important need for our body. </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around items-center p-3 text-left gap-1 w-full">
                            <div className="w-1/3 items-center justify-center flex">
                                <div className="absolute">
                                    <Image
                                        className="w-24 h-24 p-5"
                                        src={group2}
                                        alt="logo"
                                        title="logo"
                                    />
                                </div>
                                <Image
                                    className="w-32 h-32"
                                    src={round3}
                                    alt="logo"
                                    title="logo"
                                />
                            </div>
                            <div className="w-2/3 space-y-2">
                                <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                                <p className="text-gray-500">Exercise is a very important need for our body. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
