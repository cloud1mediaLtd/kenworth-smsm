"use client"
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import BrandsOnly from './brandsonly';

const BrandsContainer = ({ locale }) => {
    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    });

    return (
        <div ref={ref} className="brands-scroll-container overflow-x-auto " {...events}>
            <BrandsOnly className="min-w-[700px]" locale={locale} />
            <div className="end-padding " />
        </div>
    );
};

export default BrandsContainer;
// return (

//     <div ref={scrollContainer.ref} className="brands-scroll-container overflow-x-auto">
//         <BrandsOnly className="min-w-[700px]" locale={locale} />
//         <div className="end-padding " />
//     </div>

// );
// };
