import { useLocale } from 'next-intl';
import Hero from 'components/hero';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import Image from 'next/image';
import { Separator } from 'components/ui/separator';
import { Button } from 'components/ui/button';
import Link from 'next/link';
import { CalendarCheck, HeartPulse, ListTodo, UserCog2 } from 'lucide-react';
import { getStoryblokApi } from '@storyblok/react';


async function fetchData() {
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


export default async function IndexPage() {
  const { data } = await fetchData();
  // console.log('data', data.stories);

  const stories = data?.stories;

  console.log('stories:', stories);

  const locale = useLocale();
  // add booking for free mot

  return (
    <section className=''>

      <Hero />

      <main>
        <div className='content-container-no-bg mt-4'>

          <h1 className='mt-6'>Latest Offers</h1>



          <div className='grid grid-cols-4 gap-6 w-full pt-4'>

            <Card className='flex flex-col col-span-4 md:flex-row overflow-hidden items-center h-64'>
              <div className='relative h-full w-[400px]'>
                <Image
                  id='hero-image'
                  src="https://automaxgroup.me/wp-content/uploads/2023/08/2024-Jeep-Grand-Cherokee-4xe.jpg"
                  alt=""
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className='flex flex-col grow'>

                <CardHeader>
                  <CardTitle className='text-xlarge-semi'>The all new 2025 Jeep Grand Cheroke</CardTitle>
                </CardHeader>

                <CardFooter
                  className='flex flex-col gap-3'
                >
                  <div className='w-full flex flex-col gap-3'>

                    <Card className='flex items-center gap-3 px-2 py-1'>

                      <Image
                        src='/Mopar_logo.svg'
                        alt='Mopar'
                        width={80}
                        height={80}
                        className=" h-10 w-10"
                      />

                      <div className='flex flex-row md:flex-col leading-3 gap-1'>
                        <span className='text-sm font-semibold leading-none'>
                          3 Years 0r 100,000 Km Warranty
                        </span>

                      </div>

                    </Card>

                    <Card className='flex items-center gap-3 px-2 py-1'>

                      <Image
                        src='/logos/bankLogo.png'
                        alt='Mopar'
                        width={50}
                        height={50}
                        className=" h-10 w-10"
                      />
                      <div className='flex flex-col leading-3'>
                        <span className='text-sm font-semibold leading-none'>
                          Available Via Finance
                        </span>
                      </div>
                    </Card>

                  </div>

                  <Button asChild className='h-12 w-full'>
                    <Link href="/vehicles/3">
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </div>

            </Card>

            <Card className='col-span-4 overflow-hidden items-center hover:bg-[#0245B2]/90 bg-[#0245B2]'>
              <Link href="/parts" className='h-20 flex items-center'>
                <div className='relative h-full w-[400px]'>

                  <Image
                    src='/moparService.jpeg'
                    alt='Mopar'
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    style={{ objectFit: "cover" }}
                  />

                </div>
                <div className='p-4 grow flex flex-col gap-3 text-white'>
                  <h3>Free Oil & filter change on our brands*</h3>

                </div>
              </Link>
            </Card>

            {/* <Link href="/parts">
              <Card className='flex flex-col col-span-1 md:flex-row overflow-hidden items-center text-white relative p-2' >
                <div className='relative min-h-32 w-full h-full opacity-10'>
                  <Image
                    src='/Mopar_logo.svg'
                    alt='Mopar'
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'

                  />
                </div>
                <div className='p-4 absolute inset-0 z-20 text-black'>
                  <h3>New Online Spare parts search</h3>
                  <span className='text-xs'>Find out more...</span>
                </div>
              </Card>
            </Link> */}

            <Card className='col-span-4 overflow-hidden items-center hover:bg-slate-50'>
              <Link href="/parts" className='h-20 flex'>
                <div className='relative h-full w-[400px]'>
                  <Image
                    src='/WINCH_GUARD_LIGHT_MOUNTING BRACKETS.jpg'
                    alt='Mopar'
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className='p-4 grow flex gap-3 items-center'>
                  <h3>New Jeep Wrangler Accessories in Stock</h3>

                </div>
              </Link>

            </Card>

          </div>

          {/* <Separator className="my-6" />

           <h1>Join The Club</h1> */}

          <Separator className="my-6" />
          <div className='flex flex-col'>

            <h1>Here When You Need Us</h1>
            <p className='text-base-semi'>
              Have a question or need some help? We're here for you day and night.
              Explore the site or contact us by email, chat or phone.
            </p>

            <div className='grid grid-cols-4 gap-6 pt-6'>
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

          <Separator className="my-6" />

          <Link href="/posts" className='group flex items-center gap-2 hover:text-slate-700'>
            <h1 className='text-lg font-bold'>News & Events</h1>
            {/* Use group-hover:flex to show the span only when the parent is hovered */}
            <span className='opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex items-center'>{'>'}</span>
          </Link>

          <div className='grid grid-cols-3 gap-6 pt-4'>
            {stories.map((story) => {
              const { content } = story;
              const mainImageBlok = content.body.find(blok => blok.component === 'main_image');
              const titleBlok = content.body.find(blok => blok.component === 'title');
              const excerptBlok = content.body.find(blok => blok.component === 'excerpt');

              return (
                <Card key={story.slug} className='overflow-hidden relative'>
                  <div className='flex flex-col grow'>

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
                    <CardHeader className='h-36'>
                      <CardTitle>{titleBlok?.title}</CardTitle>
                      <CardDescription className='line-clamp-2'>{excerptBlok?.excerpt}</CardDescription>
                    </CardHeader>
                  </div>


                  <CardFooter className='flex items-end'>
                    <Button asChild>
                      <Link href={`/posts/${story.slug}`}>Read more</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

        </div>

      </main>

    </ section >
  );
}
