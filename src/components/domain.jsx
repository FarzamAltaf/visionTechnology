import { useEffect, useState } from "react";
import { Info } from "./ThemeConstant";
import "../App.css";


const Domain = ({ title, para, skills }) => {

    const [skill, setSkill] = useState([]);

    useEffect(() => {
        setSkill(skills);
    }, [skills])


    return (
        <>
            <div className={`domain p-8 sm:m-4 my-2 border-gray-300 hover:border-none w-full md:w-96 lg:w-96 border hover:outline-4 outline-[#4096ff]  hover:outline-[#4096ff] hover:outline-offset-0 transition-[border-color,outline] duration-1000 ease-in-out flex flex-col justify-between`}>
                <div className="flex flex-col h-full justify-between">
                    {/* Content section */}
                    <div className="flex-grow">
                        <h1 className="font-bold mb-2 text-2xl sm:text-3xl">{title}</h1>
                        <p className="text-gray-700 sm:text-xl my-6">{para}</p>
                    </div>

                    {/* Skills section pinned at the bottom */}
                    <div className="mt-5 flex flex-wrap justify-start gap-2">
                        {skill.map((data, index) => (
                            <p key={index} className="px-3 py-1 border border-black rounded-full">{data}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Domain;