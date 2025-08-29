import { ButtonInfo, ButtonPrimary, ButtonSecondary } from "./ThemeConstant";

const AnimatedButton = ({ text, theme, classes, onClick }) => {
    return (
        <>
            <button className={`${theme} ${classes}`} onClick={onClick}>
                <span className="block relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        {text}
                    </span>
                    <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                        {text}
                    </span>
                </span>
            </button>

        </>
    );
};

export default AnimatedButton;
