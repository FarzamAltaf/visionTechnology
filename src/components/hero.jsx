import Particles from "../reactbits/particle";
import TextType from "../reactbits/TypeText";
import { BackDropChip, BorderPrimary, TextPrimary } from "./ThemeConstant";

const Hero = () => {
    return (
        <>
            <div className="relative overflow-hidden bg-black w-screen h-screen">
                <div className="absolute top-0 left-0 w-screen h-full overflow-hidden">
                    <Particles
                        particleColors={['#fff', '#ffffff']}
                        particleCount={700}
                        particleSpread={11}
                        speed={0.09}
                        particleBaseSize={90}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                        className="w-screen h-full"
                    />
                </div>

                <div className="relative z-1 flex flex-col mt-10 items-center justify-center w-full h-full text-white text-center pointer-events-none">
                    <h1 className={`text-3xl md:text-5xl ${TextPrimary} px-8 md:w-2/3 font-bold`}>
                        <TextType
                            text={["Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam vero ex aliquam laborum!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam vero ex aliquam laborum!"]}
                            typingSpeed={75}
                            pauseDuration={2500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-left sm:text-center"
                        />
                    </h1>


                    <div className="flex gap-4">
                        <div className={`${BackDropChip} text-base mt-7 ${BorderPrimary} z-1`}>
                            GET IN TOUCH
                        </div>
                        <div className={`${BackDropChip} text-base mt-7 ${BorderPrimary}`}>
                            EXPLORE
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
