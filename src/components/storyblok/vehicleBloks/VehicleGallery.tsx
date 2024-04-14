"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from 'next/image';
import React, { useState } from 'react'; // Ensure React and useState are correctly imported


const VehicleGallery = ({ blok }) => {

  const images = blok.gallery_images;
  console.log('images:', images);

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
      <div className='relative w-full h-64 md:h-80 lg:h-96 mt-4'>
        <Image
          id='hero-image'
          src={mainImage.filename}
          alt=""
          fill={true}
          sizes='(max-width: 640px) 640px, 1920px'
          className="object-cover w-full h-auto" // This makes the image cover the width fully and adjust height automatically
        />
      </div>

      <div className='flex overflow-hidden gap-4 w-full mt-4'>
        {images.map((image) => (

          <div key={image.filename} className='relative w-full min-h-20 md:min-h-36'>
            <Image
              id='hero-image'
              src={image.filename}
              alt=""
              fill={true}
              sizes='(max-width: 640px) 640px, 1920px'
              className="object-cover w-full h-auto"
              onClick={() => setMainImage(image)}
            />
          </div>
        ))}
      </div>
    </section>

  );
};

export default VehicleGallery;

// gallery_images