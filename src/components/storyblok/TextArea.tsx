import { StoryblokComponent } from "@storyblok/react";
import type { ReactNode } from "react";
import { render } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';


// Define your types here
interface Blok {
    textarea: any; // Replace with actual type
}

interface CustomProps {
    blok: Blok;
}

interface ImageProps {
    src?: string;
    alt?: string;
    title?: string;
}

const TextArea = ({ blok }: CustomProps) => {
    const richTextContent = blok.textarea; // Replace with the actual rich text content you get from Storyblok

    const renderedContent = render(richTextContent, {
        markResolvers: {

            bold: (children: ReactNode) => <strong>{children}</strong>,
            italic: (children: ReactNode) => <em>{children}</em>,
            underline: (children: ReactNode) => <u>{children}</u>,

        },
        nodeResolvers: {
            heading: (children: ReactNode, props: any) => {
                const { level } = props;
                switch (level) {
                    case 1:
                        return <h1 className="text-3xl-semi">{children}</h1>;
                    case 2:
                        return <h2 className="text-2xl-semi">{children}</h2>;
                    case 3:
                        return <h3 className="text-xl-semi">{children}</h3>;
                    case 4:
                        return <h4 className="text-large-semi">{children}</h4>;
                    case 5:
                        return <h5 className="text-base-semi">{children}</h5>;
                    case 6:
                        return <h6 className="text-small-semi">{children}</h6>;
                    default:
                        return <h1 className="">{children}</h1>;
                }
            },
            paragraph: (children: ReactNode) => <p className="pb-3">{children}</p>,

            image: (children, props: ImageProps) => {
                const { src, alt } = props;
                return (
                    <Image
                        src={src || ''} // Fallback if src is not provided
                        alt={alt || 'Storyblok image'} // Fallback alt text
                        width={1920}
                        height={1080} // Adjust the aspect ratio as needed
                        className="w-full h-auto object-cover pt-3 max-w-2xl" // Ensures the image scales correctly with the width of its container
                    />
                );
            },
        },
        defaultBlokResolver: (name, props) => {
            const blok = { ...props, component: name };
            return <StoryblokComponent blok={blok} key={props._uid} />;
        },
    });

    return <div>{renderedContent}</div>;
}

export default TextArea;
