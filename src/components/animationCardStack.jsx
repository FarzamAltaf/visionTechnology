import { BgInfo, Info } from './ThemeConstant';
import styles from './Card/style.module.scss'
import "../App.css";
import { motion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Badge = ({ letter }) => (
    <div className="absolute 
        md:-left-0 md:top-1/2 md:-translate-y-1/2 
        left-1/2 -top-8 -translate-x-1/2 
        bg-white text-black font-extrabold rounded-full 
        h-16 w-16 flex items-center justify-center text-2xl 
        shadow-xl border-2 border-gray-300">
        {letter}
    </div>
);

export const CardsComp = ({ cards, i, progress, range, targetScale }) => {
    const cardRef = useRef(null);
    const [mobileMaxHeight, setMobileMaxHeight] = useState("auto");

    const scale = useTransform(progress, range, [1, targetScale]);
    const cardData = cards;

    useEffect(() => {
        const allCards = document.querySelectorAll(".mobile-card-height");
        let maxHeight = 0;
        allCards.forEach(card => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        setMobileMaxHeight(maxHeight + "px");
    }, [cards]);

    return (
        <div className={`${styles.cardContainer} p-4 sm:p-15 overflow-hidden`}>
            <motion.div
                style={{ scale, top: `calc(-10% + ${i * 26}px)` }}
                className={`${styles.card} scroll-stack-card 
                    bg-[#5f5f5f2b] backdrop-blur-xl border border-[#6b6b6b74] 
                    shadow-lg sm:shadow-xl rounded-2xl sm:rounded-3xl`}
            >
                <div
                    ref={cardRef}
                    className={`
                        mobile-card-height
                        bg-[${cardData.color}] 
                        rounded-2xl sm:rounded-3xl 
                        p-5 sm:p-10 
                        shadow-md sm:shadow-lg 
                        text-[${cardData.textColor}] 
                        ${cardData.badge && "relative"}
                    `}

                    style={{
                        height: mobileMaxHeight
                    }}
                >
                    {cardData.badge && (
                        <Badge letter={cardData.badge ? `${cardData.badgeData}` : null} />
                    )}

                    <h2
                        className={`
                            text-lg sm:text-2xl md:text-3xl lg:text-4xl 
                            font-bold mb-3 sm:mb-4 
                            text-center sm:text-left
                            ${cardData.badge && "md:pl-4 pt-10 md:pt-0"}
                        `}
                    >
                        {cardData.heading}
                    </h2>

                    <p
                        className={`
                            text-sm sm:text-base 
                            leading-snug sm:leading-normal
                            text-center sm:text-left
                            ${cardData.badge && "md:pl-4"}
                        `}
                        dangerouslySetInnerHTML={{ __html: cardData.paragraph }}
                    ></p>
                </div>
            </motion.div>
        </div>
    );
};
