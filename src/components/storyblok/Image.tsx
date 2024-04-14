import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  // Extract the Image asset from blok
  const { Image } = blok;

  // If the Image field is present, display it
  if (Image && Image.filename) {
    return (
      <div {...storyblokEditable(blok)}>
        <img src={Image.filename} alt={Image.alt || "Storyblok Image"} />
      </div>
    );
  }

  // If the Image field is not present, display nothing
  return null;
};

export default Image;
