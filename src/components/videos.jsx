import { useRef, useState } from 'react';

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleTogglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
            <h2 className="text-3xl font-bold mb-6">Company Introduction Video</h2>

            <div
                className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg border border-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls={false}
                    loop={true}
                >
                    <source
                        src="https://www.pexels.com/download/video/33656654/"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Center Play/Pause Button */}
                <button
                    onClick={handleTogglePlay}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered || !isPlaying ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className={`bg-[#2ec4b5e0] text-white p-4 rounded-full hover:scale-110 transition-transform`}>
                        {isPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.02A1 1 0 008 9.02v5.96a1 1 0 001.555.832l5.197-3.02a1 1 0 000-1.664z" />
                            </svg>
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default VideoSection;
