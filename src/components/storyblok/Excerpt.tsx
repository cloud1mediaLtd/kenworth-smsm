import { storyblokEditable } from "@storyblok/react";

const Excerpt = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <p className="">{blok.excerpt}</p>
        </div>
    );
};

export default Excerpt;
