import { storyblokEditable } from "@storyblok/react";
import Image from 'next/image';

const MainImage = ({ blok }) => {

    const images = blok.main_image;
    console.log('images:', images);

    return (

        <div className='relative' {...storyblokEditable(blok)}>

            {images.map((image) => (

                <div key={image.filename} className='relative w-full z-0'>
                    <Image
                        id='hero-image'
                        src={image.filename}
                        alt=""
                        width={1920}
                        height={500}
                        sizes='(max-width: 640px) 640px, 1920px'
                        style={{ objectFit: "contain" }}
                        className="object-fill w-full h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-96"
                    />
                </div>
            ))}
        </div>

    );
};

export default MainImage;
