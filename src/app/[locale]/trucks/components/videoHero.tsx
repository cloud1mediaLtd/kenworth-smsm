"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VideoHero = ({ videoUrl, fallbackImageUrl }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);


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

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-full min-h-[300px] md:min-h-[400px]">
            {!isVideoLoaded && videoUrl && (
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

            {videoUrl && (
                <video
                    ref={videoRef}
                    id="video-with-fallback"
                    className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? '' : 'hidden'}`}
                    preload="none"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {!videoUrl && (
                <Image src={fallbackImageUrl} alt="Background" layout="fill" className="object-cover" />
            )}
            {videoUrl && (
                <button
                    onClick={handlePlayPause}
                    className="absolute bottom-4 right-4 p-2 rounded-full z-50 bg-kenbg"
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m2 0H8m4-6V5m0 14v-2m0 0V5m0 12v2z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.379-3.694A1 1 0 007 8.234v7.528a1 1 0 001.373.928l6.379-3.694a1 1 0 000-1.856z" />
                        </svg>
                    )}
                </button>
            )}
        </div>
    );
};

export default VideoHero;
