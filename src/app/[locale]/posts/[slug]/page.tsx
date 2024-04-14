import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import Link from "next/link";
import Image from 'next/image';
import { Card } from 'components/ui/card';
import { Separator } from "components/ui/separator";

async function fetchData(slug: any) {
    let sbParams = {};

    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/posts/${slug}`, sbParams, { cache: "no-store" });
}

export default async function PostBySlug({ params: { slug } }) {
    const { data } = await fetchData(slug);
    const story = data?.story;
    console.log('data', data);
    console.log('blok for StoryblokComponent:', story.content);

    // console.log(slug)

    return (
        <div>
            <div className="py-2 flex gap-2">

                <Link href="/posts">

                    &lt; Back to Posts</Link>

            </div>

            <Separator className='mb-4' />
            <div className="content-container-no-bg flex justify-center">
                <StoryblokComponent blok={story.content} />
            </div>
        </div>
    );
}
