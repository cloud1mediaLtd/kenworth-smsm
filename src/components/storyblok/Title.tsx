import { storyblokEditable } from "@storyblok/react";

const Title = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="relative">
            <h1 className="">{blok.title}</h1>
        </div>
    );
};

export default Title;
