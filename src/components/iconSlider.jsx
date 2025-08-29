import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState, useRef } from 'react';

const IconSlider = ({ items }) => {
    const [slider, setSlider] = useState(items);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        // No need for setTimeout, autoplay is enabled immediately
    }, [items]);

    return (
        <div className="overflow-hidden">
            <Splide
                ref={sliderRef}
                options={{
                    type: 'loop',
                    perPage: 10,
                    pagination: false,
                    arrows: false,
                    autoplay: autoplayEnabled,
                    interval: 0, // Set interval to 2000ms (2 seconds)
                    speed: 200000, // Adjust speed to move slowly
                    pauseOnHover: false, // Disable pause on hover
                    drag: false, // Disable dragging
                    clickable: false, // Disable clicking
                    gap: '0rem',
                    breakpoints: {
                        640: {
                            perPage: 10,
                            gap: '6rem',
                        },
                        400: {
                            perPage: 7,
                            gap: '4rem',
                        },
                    },
                    rewind: false, // Disable rewind
                }}
            >
                {slider.map((data, index) => (
                    <SplideSlide key={index}>
                        <div className="flex justify-center items-center h-full text-3xl md:text-3xl font-normal tracking-tighter whitespace-nowrap">
                            {data}
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default IconSlider;