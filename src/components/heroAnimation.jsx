import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

function AnimateHero() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    // Store loaded images
    const [images, setImages] = useState([]);
    const [totalFrames, setTotalFrames] = useState(0);

    // Determine screen type
    const isMobile = window.innerWidth <= 768; // breakpoint for mobile

    useEffect(() => {
        let isCancelled = false;
        const loadedImages = [];
        let loadedCount = 0;

        const frameCount = isMobile ? 342 : 590;
        setTotalFrames(frameCount);

        for (let i = 1; i <= frameCount; i++) {
            ((index) => {
                const img = new Image();
                img.src = isMobile
                    ? `https://raw.githubusercontent.com/FarzamAltaf/images-frames/master/mobile/${index}.webp`
                    : `https://raw.githubusercontent.com/FarzamAltaf/images-frames/master/computer/${index}.webp`;

                img.onload = () => {
                    loadedCount++;
                    if (!isCancelled) {
                        loadedImages[index - 1] = img;
                        if (loadedCount === frameCount) {
                            setImages(loadedImages);
                        }
                    }
                };

                img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === frameCount && !isCancelled) {
                        setImages(loadedImages);
                    }
                };
            })(i);
        }

        return () => {
            isCancelled = true;
        };
    }, [isMobile]);

    const render = useCallback(
        (index) => {
            if (!images.length) return;
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            const img = images[index - 1];
            if (ctx && img) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        },
        [images]
    );

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        if (!images.length) return;

        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const frame = Math.min(Math.round(latest * totalFrames), totalFrames);
            render(frame);
        });

        return () => unsubscribe();
    }, [scrollYProgress, render, images, totalFrames]);

    useEffect(() => {
        if (images.length) render(1);
    }, [images, render]);

    // Handle canvas resize
    useEffect(() => {
        function handleResize() {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                render(1);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [render]);

    return (
        <div
            ref={containerRef}
            style={{
                height: '300vh',
                position: 'relative',
                backgroundColor: 'black',
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    width: '100%',
                    zIndex: 10,
                    backgroundColor: 'black',
                }}
            >
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100vh',
                        display: 'block',
                        margin: '0 auto',
                    }}
                />
            </div>
        </div>
    );
}

export default AnimateHero;
