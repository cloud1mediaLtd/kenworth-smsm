import Link from 'next/link';

import { getStoryblokApi } from "@storyblok/react";
import { Separator } from 'components/ui/separator';
import { Suspense } from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import { Button } from 'components/ui/button';
import Image from 'next/image';
import { CalendarCheck, HeartPulse, ListTodo, UserCog2 } from 'lucide-react';

export async function fetchData() {
    let sbParams = { starts_with: "posts" };
    const storyblokApi = getStoryblokApi();
    try {
        return storyblokApi.get(`cdn/stories/`, sbParams, { cache: "no-store" });
    }
    catch (error) {
        console.error('error', error);
        return { data: null };
    }
}


export default async function Posts() {
    const { data } = await fetchData();
    console.log('data', data);

    if (!data) {
        return <div>There was an error fetching the data</div>;
    }

    return (
        <div className='content-container-no-bg mt-6'>
            <Suspense fallback={<div>Loading...</div>}>

                <div className=''>
                    <h1>Posts</h1>
                </div>
                <Separator className='my-3' />
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='grid grid-cols-2 basis-3/4 gap-6 '>
                        {data?.stories?.map((story) => {
                            const { content } = story;
                            const mainImageBlok = content.body.find(blok => blok.component === 'main_image');
                            const titleBlok = content.body.find(blok => blok.component === 'title');
                            const excerptBlok = content.body.find(blok => blok.component === 'excerpt');


                            return (
                                <Card
                                    key={story.id}
                                    className='overflow-hidden max-h-96'>
                                    {mainImageBlok && mainImageBlok.main_image.length > 0 && (
                                        <div className='relative h-44'>
                                            <Image
                                                src={mainImageBlok.main_image[0].filename}
                                                alt=""
                                                fill={true}
                                                sizes='(max-width: 640px) 640px, 1920px'
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{titleBlok?.title}</CardTitle>
                                        <CardDescription className='line-clamp-2'>{excerptBlok?.excerpt}</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button asChild>
                                            <Link href={`/posts/${story.slug}`}>Read more</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>

                            );
                        }
                        )}
                    </div>
                    <div className=' basis-1/4'>
                        <Card className='bg-black w-full p-6'>
                            <div className='flex flex-col text-white'>

                                <h1>Here When You Need Us</h1>
                                <p className='text-base-semi'>
                                    Have a question or need some help? We're here for you day and night.
                                    Explore the site or contact us by email, chat or phone.
                                </p>

                                <div className='flex flex-col gap-6 pt-6'>
                                    <div className='flex flex-col text-center items-center gap-6 p-2' >
                                        <div className='flex h-20 w-20 rounded-full bg-black items-center justify-center'>
                                            <span className='text-white'>
                                                <UserCog2 size={40} />
                                            </span>

                                        </div>
                                        <span className='text-large-semi'>
                                            Schedule a service
                                        </span>
                                    </div>

                                    <div className='flex flex-col text-center items-center gap-6 p-2' >
                                        <div className='flex h-20 w-20 rounded-full bg-black items-center justify-center'>
                                            <span className='text-white'>
                                                <HeartPulse size={40} />
                                            </span>

                                        </div>
                                        <span className='text-large-semi'>
                                            Vehical Health Report
                                        </span>
                                    </div>

                                    <div className='flex flex-col text-center  items-center gap-6 p-2' >
                                        <div className='flex h-20 w-20 rounded-full bg-black items-center justify-center'>
                                            <span className='text-white'>
                                                <ListTodo size={40} />
                                            </span>

                                        </div>
                                        <span className='text-large-semi'>
                                            Check For Recalls
                                        </span>
                                    </div>

                                    <div className='flex flex-col text-center items-center gap-6 p-2' >
                                        <div className='flex h-20 w-20 rounded-full bg-black items-center justify-center'>
                                            <span className='text-white'>
                                                <CalendarCheck size={40} />
                                            </span>

                                        </div>
                                        <span className='text-large-semi'>
                                            Maintenance Schedule
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </Suspense>
        </div >
    );
}

