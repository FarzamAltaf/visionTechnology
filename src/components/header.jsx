import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Link from "antd/es/typography/Link";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ShinyText from "../reactbits/shinyText";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center">
                <div className="mb-4 bg-[#9d9d9d75] border border-[#9b9b9ba9] rounded-4xl backdrop-blur-md fixed text-white z-50 block w-[95%] px-5 py-4 my-5">
                    <div className="flex justify-between items-center py-1 px-4">
                        <div>
                            <Link className="flex items-center">
                                <img src={Logo} alt="Your Logo" className="h-6" />
                            </Link>
                        </div>

                        <div className="me-3 w-[520px] overflow-hidden relative h-[24px] hidden lg:block">
                            <div className={`absolute right-0 top-0 transition-all duration-1500 ease-in-out translate-x-0 opacity-100`}>
                                <ul className="flex gap-6 whitespace-nowrap text-[#818181]">
                                    <li><ShinyText text="Home" disabled={false} speed={3} className='custom-class' /></li>
                                    <li><ShinyText text="About Us" disabled={false} speed={3} className='custom-class' /></li>
                                    <li><ShinyText text="Services" disabled={false} speed={3} className='custom-class' /></li>
                                    <li><ShinyText text="Referral Program" disabled={false} speed={3} className='custom-class' /></li>
                                    <li><ShinyText text="Contact Us" disabled={false} speed={3} className='custom-class' /></li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="lg:hidden -mb-2">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <IoClose className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Slide-down Menu */}
                    <div
                        className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"} ease-in-out`}
                    >
                        <ul className="flex flex-col gap-3 text-white">
                            <li><ShinyText text="Home" disabled={false} speed={3} className='custom-class' /></li>
                            <li><ShinyText text="About Us" disabled={false} speed={3} className='custom-class' /></li>
                            <li><ShinyText text="Services" disabled={false} speed={3} className='custom-class' /></li>
                            <li><ShinyText text="Referral Program" disabled={false} speed={3} className='custom-class' /></li>
                            <li><ShinyText text="Contact Us" disabled={false} speed={3} className='custom-class' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
