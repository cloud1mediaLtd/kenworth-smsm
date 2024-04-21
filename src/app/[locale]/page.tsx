import { useLocale } from 'next-intl';
import Hero from 'components/hero';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import Image from 'next/image';
import { Separator } from 'components/ui/separator';
import { Button } from 'components/ui/button';
import Link from 'next/link';
import { CalendarCheck, HeartPulse, ListTodo, UserCog2 } from 'lucide-react';
import { getStoryblokApi } from '@storyblok/react';
import { Badge } from 'components/ui/badge';


async function fetchData() {
  const sbParams = { starts_with: "posts" };
  const storyblokApi = getStoryblokApi();

  try {
    const response = await storyblokApi.get("cdn/stories/", sbParams);
    return { data: response.data, error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { data: null, error: error.toString() };
  }
}


export default async function IndexPage() {
  const { data, error } = await fetchData();
  // console.log('data', data.stories);

  const stories = data?.stories;

  if (error) {
    // Handle the error state in the UI
    console.error('Failed to load stories:', error);
  }

  // console.log('stories:', stories);

  const locale = useLocale();
  // add booking for free mot

  return (
    <section className=''>

      <Hero />

      <main>
        <div className='content-container-no-bg mt-4'>

          <h1 className='mt-6'>Latest Offers</h1>

          <div className='flex flex-col w-full pt-4'>

            <div className='grid grid-cols-2 gap-4'>
              <Card className='flex flex-col md:flex-row overflow-hidden md:h-80 col-span-2 bg-black'>

                <div className='relative min-h-52 md:h-full md:w-72 lg:w-full basis-1/2'>
                  <Image
                    src="/jeep-grand-cherokee-4xe-overview-canvas-2-1920X922.jpg"
                    alt=""
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='flex flex-col grow'>

                  <CardHeader>
                    <Badge className='bg-[#0245B2]'>New 2025 | Early Bird Offers</Badge>
                    <div className='text-xl font-bold text-slate-50 flex items-center gap-3 pt-2'>
                      <Image
                        src='/logos/jeep_logo.svg'
                        alt='Mopar'
                        width={80}
                        height={80}
                        className="h-10 object-contain"
                      />
                      <Separator orientation='vertical' className='h-4' />
                      Grand Cheroke
                    </div>
                  </CardHeader>

                  <CardContent className='h-full flex items-center'>
                    <div className='w-full flex flex-col gap-3 h-auto'>

                      <Card className='flex items-center gap-3 px-2 py-1'>

                        <Image
                          src='/Mopar_logo.svg'
                          alt='Mopar'
                          width={80}
                          height={80}
                          className="h-10 w-10"
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
                  </CardContent>

                  <CardFooter
                    className='flex flex-col gap-3'
                  >


                    <div className='flex w-full justify-end items-center gap-3'>
                      <Link href={"/vehicles/3"} className=' font-semibold text-sm text-slate-300'>
                        View Jeep Line up
                      </Link>
                      <Button asChild variant={"outline"} size='sm' className='h-12 justify-end'>
                        <Link href="/vehicles/model/16">
                          More...
                        </Link>
                      </Button>
                    </div>


                  </CardFooter>
                </div>

              </Card>

              <Card className='flex flex-col overflow-hidden bg-black'>

                <div className='relative min-h-52'>
                  <Image
                    src="/300.png"
                    alt=""
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='flex flex-col grow'>

                  <CardHeader>
                    <Badge className='bg-[#0245B2]'>New 2025 | Early Bird Offers</Badge>
                    <div className='text-xl font-bold text-slate-50 flex items-center gap-3 pt-2'>
                      <Image
                        src='/logos/chryslerlogo.png'
                        alt='Mopar'
                        width={150}
                        height={80}
                        className="h-10 object-contain"
                      />
                      <Separator orientation='vertical' className='h-4' />
                      300
                    </div>
                  </CardHeader>

                  <CardContent className='h-full flex items-center'>
                    <div className='w-full flex flex-col gap-3 h-auto'>

                      <Card className='flex items-center gap-3 px-2 py-1'>

                        <Image
                          src='/Mopar_logo.svg'
                          alt='Mopar'
                          width={80}
                          height={80}
                          className="h-10 w-10"
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
                  </CardContent>

                  <CardFooter
                    className='flex flex-col gap-3'
                  >

                    <div className='flex w-full justify-end items-center gap-3'>
                      <Link href={"/vehicles/3"} className=' font-semibold text-sm text-slate-300'>View Chrysler Line up</Link>
                      <Button asChild variant={"outline"} size='sm' className='h-12 justify-end'>
                        <Link href="/vehicles/model/16">
                          More...
                        </Link>
                      </Button>
                    </div>

                  </CardFooter>
                </div>

              </Card>

              <Card className='flex flex-col overflow-hidden bg-[#9C101A]'>

                <div className='relative min-h-52'>
                  <Image
                    src="/fiatrange.jpg"
                    alt=""
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='flex flex-col grow'>

                  <CardHeader>
                    <Badge className='bg-black'>Fleet | Mega Volume Discounts</Badge>
                    <div className='text-xl font-bold text-slate-50 flex items-center gap-3 pt-2'>
                      <Image
                        src='/logos/Fiat_professional_logo_white.png'
                        alt='Mopar'
                        width={80}
                        height={80}
                        className="h-10 object-contain"
                      />
                      <Separator orientation='vertical' className='h-4' />
                      Fiat Professional
                    </div>
                  </CardHeader>



                  <CardContent className='h-full flex items-center'>
                    <div className='w-full flex flex-col gap-3 h-auto'>

                      <Card className='flex items-center gap-3 px-2 py-1'>

                        <Image
                          src='/Mopar_logo.svg'
                          alt='Mopar'
                          width={80}
                          height={80}
                          className="h-10 w-10"
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
                  </CardContent>

                  <CardFooter
                    className='flex flex-col gap-3'
                  >


                    <div className='flex w-full justify-end items-center gap-3'>
                      <Link href={"/vehicles/3"} className=' font-semibold text-sm text-slate-300'>View Fiat Professional Line up</Link>
                      <Button asChild className='h-12 justify-end'>
                        <Link href="/vehicles/model/16">
                          More...
                        </Link>
                      </Button>
                    </div>


                  </CardFooter>
                </div>

              </Card>



            </div>


            <Separator className="my-6" />

            <div className='flex gap-6'>

              <Card className='overflow-hidden items-center hover:bg-[#0245B2]/90 bg-[#0245B2] basis-3/5'>
                <Link href="/parts" className='h-24 flex items-center'>
                  <div className='relative h-full w-[400px]'>

                    <Image
                      src='/moparService.jpeg'
                      alt='Mopar'
                      fill={true}
                      sizes='(max-width: 640px) 640px, 1920px'
                      style={{ objectFit: "cover" }}
                    />

                  </div>
                  <div className='p-4 grow flex flex-col gap-3 text-white font-semibold'>
                    <h3 className=''>Free Oil & Filter change*</h3>

                  </div>
                </Link>
              </Card>

              <Card className='overflow-hidden items-center hover:bg-slate-50 basis-2/5'>
                <Link href="/parts" className='h-24 flex'>
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
                    <h3>New Jeep Wrangler Accessories</h3>

                  </div>
                </Link>

              </Card>

            </div>

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

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6'>
              <div className='flex flex-col text-center items-center gap-6 p-2' >
                <div className='flex h-20 w-20 rounded-full bg-[#0245B2] items-center justify-center'>
                  <span className='text-white'>
                    <UserCog2 size={40} />
                  </span>

                </div>
                <span className='text-large-semi'>
                  Service
                </span>
              </div>

              <div className='flex flex-col text-center items-center gap-6 p-2' >
                <div className='flex h-20 w-20 rounded-full bg-[#0245B2] items-center justify-center'>
                  <span className='text-white'>
                    <HeartPulse size={40} />
                  </span>

                </div>
                <span className='text-large-semi'>
                  Health Report
                </span>
              </div>

              <div className='flex flex-col text-center  items-center gap-6 p-2' >
                <div className='flex h-20 w-20 rounded-full bg-[#0245B2] items-center justify-center'>
                  <span className='text-white'>
                    <ListTodo size={40} />
                  </span>

                </div>
                <span className='text-large-semi'>
                  Recalls
                </span>
              </div>

              <div className='flex flex-col text-center items-center gap-6 p-2' >
                <div className='flex h-20 w-20 rounded-full bg-[#0245B2] items-center justify-center'>
                  <span className='text-white'>
                    <CalendarCheck size={40} />
                  </span>

                </div>
                <span className='text-large-semi'>
                  Schedule
                </span>
              </div>
            </div>
            <Link href="/parts" className='pt-6'>
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
            </Link>

          </div>

          <Separator className="my-6" />

          <Link href="/posts" className='group flex items-center gap-2 hover:text-slate-700'>
            <h1 className='text-lg font-bold'>News & Events</h1>
            {/* Use group-hover:flex to show the span only when the parent is hovered */}
            <span className='opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex items-center'>{'>'}</span>
          </Link>

          <div className='grid grid-cols-2 gap-4 pt-4'>
            {stories?.slice(0, 3).map((story, index) => {
              const { content } = story;
              const mainImageBlok = content.body.find(blok => blok.component === 'main_image');
              const titleBlok = content.body.find(blok => blok.component === 'title');
              const excerptBlok = content.body.find(blok => blok.component === 'excerpt');

              const cardClassName = `overflow-hidden relative ${index === 2 ? 'col-span-2' : ''}`;


              return (
                <Card key={story.slug} className={cardClassName}>
                  <Link href={`/posts/${story.slug}`}>

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

                  </Link>
                </Card>
              );
            })}
          </div>

        </div>

      </main>

    </ section >
  );
}
