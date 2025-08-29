import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { Badge } from "antd";
// import "../App.css";
import Bulb from "../assets/images/idea.jpg";
import Balloon from "../assets/images/design.jpg";
import Coding from "../assets/images/develop.jpg";
import Testing from "../assets/images/testing.jpg";
import Launch from "../assets/images/launch.jpg";
import Support from "../assets/images/support.jpg";
import Heading from "./heading";

gsap.registerPlugin(ScrollTrigger);

function ScrollGsap() {
    const images = [
        Bulb,
        Balloon,
        Coding,
        Testing,
        Launch,
        Support,
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

            const animation = gsap.to(".photo:not(:first-child)", {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.5,
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".rightblock",
                animation: animation,
                scrub: true,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>

            {/* For Large Screens Start*/}
            <React.Fragment>
                <div className="parentGsap bg-black py-6 pb-16 overflow-hidden hidden lg:block">
                    <div className="text text-left px-8 w-100 mt-12">
                        <Heading text={"How We Handle the"} size={"text-5xl text-white whitespace-nowrap"} />
                        <Heading span={"Software Development "} textTwo={"Process."} size={"text-5xl text-white whitespace-nowrap"} />
                    </div>
                    <div className="gallery flex text-white">
                        <div className="left w-1/2 sm:ml-auto ml-1">
                            <div className="detail h-dvh flex flex-col justify-center w-10/12 mx-auto text-2xl ">
                                <Badge.Ribbon color="black">
                                    <div className="px-4 bg-black border-l-4">
                                        <p className="font-bold font-outfit text-sm text-black pt-4"><span className="bg-white px-3 py-1  rounded-full">01/06</span></p>
                                        <Heading span={"Innovate"} size={"text-6xl my-3"} />
                                        <p className="text-lg pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail h-dvh flex flex-col justify-center w-10/12 mx-auto text-2xl ">
                                <Badge.Ribbon color="black">
                                    <div className="px-4 bg-black border-l-4">
                                        <p className="font-bold font-outfit text-sm text-black pt-4"><span className="bg-white px-3 py-1  rounded-full">02/06</span></p>
                                        <Heading span={"Compose"} size={"text-6xl my-3"} />
                                        <p className="text-lg pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail h-dvh flex flex-col justify-center w-10/12 mx-auto text-2xl ">
                                <Badge.Ribbon color="black">
                                    <div className="px-4 bg-black border-l-4">
                                        <p className="font-bold font-outfit text-sm text-black pt-4"><span className="bg-white px-3 py-1  rounded-full">03/06</span></p>
                                        <Heading span={"Develop"} size={"text-6xl my-3"} />
                                        <p className="text-lg pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail h-dvh flex flex-col justify-center w-10/12 mx-auto text-2xl ">
                                <Badge.Ribbon color="black">
                                    <div className="px-4 bg-black border-l-4">
                                        <p className="font-bold font-outfit text-sm text-black pt-4"><span className="bg-white px-3 py-1  rounded-full">04/06</span></p>
                                        <Heading span={"Assessment"} size={"text-6xl my-3"} />
                                        <p className="text-lg pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail h-dvh flex flex-col justify-center w-10/12 mx-auto text-2xl ">
                                <Badge.Ribbon color="black">
                                    <div className="px-4 bg-black border-l-4">
                                        <p className="font-bold font-outfit text-sm text-black pt-4"><span className="bg-white px-3 py-1  rounded-full">05/06</span></p>
                                        <Heading span={"Launch"} size={"text-6xl my-3"} />
                                        <p className="text-lg pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail h-dvh flex flex-col justify-center w-10/12 mx-auto text-2xl ">
                                <Badge.Ribbon color="black">
                                    <div className="px-4 bg-black border-l-4">
                                        <p className="font-bold font-outfit text-sm text-black pt-4"><span className="bg-white px-3 py-1  rounded-full">06/06</span></p>
                                        <Heading span={"Support"} size={"text-6xl my-3"} />
                                        <p className="text-lg pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                        </div>
                        <div className="rightblock w-1/2 h-lvh flex flex-col justify-center">
                            <div className="relative h-[420px] w-[330px] mx-auto mt-4">
                                {images.map((image, index) => (
                                    <div key={index} className="photo absolute">
                                        <img
                                            src={image}
                                            className="h-full w-full object-cover gsapPhoto rounded-full"
                                            alt={`Image ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            {/* For Large Screens End */}


            {/* For small Screens Start */}
            <React.Fragment>
                <div className="parentGsap bg-black py-6 pb-16 overflow-hidden block lg:hidden">
                    <div className="text text-left px-8 w-100 mt-12">
                        <Heading text={"How We Handle the"} size={"text-5xl text-white"} />
                        <Heading span={"Software Development "} textTwo={"Process."} size={"text-5xl text-white"} />
                    </div>
                    <div className="flex text-white overflow-x-auto">
                        <div className="left mt-12 flex flex-row">
                            <div className="detail flex flex-col justify-start w-64 mx-2 text-2xl">
                                <Badge.Ribbon color="black">
                                    <div className="px-6 my-6 bg-black">
                                        <img
                                            src={Bulb}
                                            className="h-full w-full object-cover gsapPhoto  rounded-full"
                                        />
                                        <Heading span={"Innovate"} size={"text-3xl"} />
                                        <p className="text-base pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail flex flex-col justify-start w-64 mx-2 text-2xl">
                                <Badge.Ribbon color="black">
                                    <div className="px-6 my-6 bg-black">
                                        <img
                                            src={Balloon}
                                            className="h-full w-full object-cover gsapPhoto rounded-full"
                                        />
                                        <Heading span={"Compose"} size={"text-3xl"} />
                                        <p className="text-base pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail flex flex-col justify-start w-64 mx-2 text-2xl">
                                <Badge.Ribbon color="black">
                                    <div className="px-6 my-6 bg-black">
                                        <img
                                            src={Coding}
                                            className="h-full w-full object-cover gsapPhoto rounded-full"
                                        />
                                        <Heading span={"Develop"} size={"text-3xl"} />
                                        <p className="text-base pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail flex flex-col justify-start w-64 mx-2 text-2xl">
                                <Badge.Ribbon color="black">
                                    <div className="px-6 my-6 bg-black">
                                        <img
                                            src={Testing}
                                            className="h-full w-full object-cover gsapPhoto rounded-full"
                                        />
                                        <Heading span={"Assessment"} size={"text-3xl"} />
                                        <p className="text-base pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail flex flex-col justify-start w-64 mx-2 text-2xl">
                                <Badge.Ribbon color="black">
                                    <div className="px-6 my-6 bg-black">
                                        <img
                                            src={Launch}
                                            className="h-full w-full object-cover gsapPhoto rounded-full"
                                        />
                                        <Heading span={"Launch"} size={"text-3xl"} />
                                        <p className="text-base pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className="detail flex flex-col justify-start w-64 mx-2 text-2xl">
                                <Badge.Ribbon color="black">
                                    <div className="px-6 my-6 bg-black">
                                        <img
                                            src={Support}
                                            className="h-full w-full object-cover gsapPhoto rounded-full"
                                        />
                                        <Heading span={"Support"} size={"text-3xl"} />
                                        <p className="text-base pb-6 pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique placeat possimus facilis et expedita voluptate debitis, aliquam corrupti? Ullam voluptas veritatis eius, delectus eum neque harum laboriosam dignissimos.</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            {/* For small Screens End */}
        </>
    );
}

export default ScrollGsap;
