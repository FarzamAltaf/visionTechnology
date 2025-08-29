import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState, useRef } from 'react';

const SliderComponent = ({ items }) => {
    const [slider, setSlider] = useState(items);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        // No need for setTimeout, autoplay is enabled immediately
    }, [items]);

    return (
        <div className="my-3 overflow-hidden">
            <Splide
                ref={sliderRef}
                options={{
                    type: 'loop',
                    perPage: 3, // Show one item at a time
                    pagination: false,
                    arrows: false,
                    autoplay: autoplayEnabled,
                    interval: 0, // Set interval to 0 to move continuously
                    speed: 60000, // Adjust speed to move smoothly
                    pauseOnHover: true,
                    drag: false, // Disable dragging to prevent user interaction
                    gap: '0rem', // Remove gap between items
                    breakpoints: {
                        640: {
                            perPage: 4,
                            gap: '12rem',
                        },
                    },
                    rewind: true, // Enable rewind to move continuously
                }}
            >
                {slider.map((data, index) => (
                    <SplideSlide key={index}>
                        <div className="flex justify-center items-center h-full text-xl md:text-4xl font-normal tracking-tighter whitespace-nowrap">
                            {data}
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
            <hr className='my-4 text-[#cfcfcf]' />
        </div>
    );
};

export default SliderComponent;