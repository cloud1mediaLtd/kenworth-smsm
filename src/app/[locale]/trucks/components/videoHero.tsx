"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const VideoHero = ({ videoUrl, fallbackImageUrl }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video-with-fallback');

        const handleLoadedData = () => {
            setIsVideoLoaded(true);
        };

        if (video) {
            video.addEventListener('loadeddata', handleLoadedData);
        }

        return () => {
            if (video) {
                video.removeEventListener('loadeddata', handleLoadedData);
            }
        };
    }, []);

    return (
        <div className="relative w-full">
            {!isVideoLoaded && (
                <div className="flex justify-center items-center">
                    {/* Fallback Image */}
                    <Image src={fallbackImageUrl} alt="Loading..." width={600} height={1600} className="w-full h-full object-cover min-h-[400px]" />
                    {/* Optional Loading Spinner */}
                    <div className="absolute">
                        <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                    </div>
                </div>
            )}
            <video
                id="video-with-fallback"
                className={` ${isVideoLoaded ? '' : 'hidden'}`}
                width="1600"
                height="600"
                preload="none"
                autoPlay
                loop
                muted
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoHero;
