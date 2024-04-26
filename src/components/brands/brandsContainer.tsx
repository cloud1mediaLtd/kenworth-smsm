// import { useRef } from "react";
// import { useDraggable } from "react-use-draggable-scroll";
import dynamic from "next/dynamic";

const BrandsOnly = dynamic(() => import('./brandsonly'), {
    ssr: false,
})

const BrandsContainer = ({ locale }) => {
    // const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    // const { events } = useDraggable(ref, {
    //     isMounted: true,
    // });

    return (
        <div className="brands-scroll-container overflow-x-auto">
            <BrandsOnly className="min-w-[700px]" locale={locale} />
            <div className="end-padding " />
        </div>
    );
};

export default BrandsContainer;


{/* <div ref={ref} className="brands-scroll-container overflow-x-auto " {...events}> */ }

