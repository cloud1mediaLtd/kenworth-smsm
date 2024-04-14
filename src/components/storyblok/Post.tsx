import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Post = ({ blok }) => (
  <article {...storyblokEditable(blok)} className="prose lg:prose-xl relative">
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </article>
);



export default Post;