"use client";
import React, { useRef, useEffect } from 'react';
import BrandsOnly from './brandsonly';

const BrandsContainer = ({ locale }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleWheel = (event) => {
            event.preventDefault();  // Prevent the default vertical scrolling
            scrollContainer.scrollLeft += event.deltaY;  // Apply the vertical scroll delta to the horizontal scroll
        };

        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            scrollContainer.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className="brands-scroll-container overflow-x-auto">
            <BrandsOnly className="min-w-[700px]" locale={locale} />
            <div className="end-padding " />
        </div>
    );
};

export default BrandsContainer;
