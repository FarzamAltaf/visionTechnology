import { stackdata } from "../data/stack";
import "../App.css";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { CardsComp } from "./animationCardStack";

const Stack = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    return (
        <div className="">
            <main ref={container} className="bg-black">
                <div className="mx-7 md:mx-12">
                    <h1 className="text-white md:text-4xl sm:text-3xl text-xl pt-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis facilis error, voluptatibus commodi cum nisi?</h1>
                    <p className="text-gray-200 md:text-sm sm:text-sm text-sm my-7 text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae harum porro ipsa eum veniam, corporis perspiciatis quia perferendis voluptates quasi officia dignissimos, est non corrupti, magni fugit voluptatum iure nesciunt fuga repudiandae ut explicabo obcaecati. Mollitia sit earum corrupti obcaecati quam aspernatur? Dicta vel alias atque recusandae optio pariatur totam labore expedita eum itaque. Repudiandae cupiditate velit nulla sapiente provident.</p>
                </div>
                {
                    stackdata.map((cards, index) => {
                        const targetScale = 1 - ((stackdata.length - index) * 0.03)
                        return <CardsComp key={index} i={index} cards={cards} range={[index * 0.14, 1]} targetScale={targetScale} progress={scrollYProgress} />
                    })
                }
            </main>
        </div>
    )
}

export default Stack