import { useLocale } from 'next-intl';
import Hero from 'components/index/hero';
import { Card, CardContent, CardFooter, CardHeader } from 'components/ui/card';
import Image from 'next/image';
import { Separator } from 'components/ui/separator';
import Link from 'next/link';
import { ArrowRightCircleIcon, CalendarCheck, HeartPulse, ListTodo, UserCog2 } from 'lucide-react';
import { getStoryblokApi } from '@storyblok/react';
import { Badge } from 'components/ui/badge';
import PostsPreview from 'components/postsPreview';
import MoparSection from 'components/moparSection';


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

          <div className='flex flex-col w-full pt-6'>

            <div className='grid grid-cols-2 gap-8'>
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
                    <Badge className='from-[#9C101A] bg-gradient-to-r to-[#340407]'>New 2025 | Early Bird Offers</Badge>
                    <div className='text-2xl font-bold text-slate-50 flex items-center gap-3 pt-3'>
                      <Image
                        src='/logos/jeep_logo.svg'
                        alt='Mopar'
                        width={100}
                        height={100}
                        className="h-10 object-contain"
                      />
                      <Separator orientation='vertical' className='h-6' />
                      Grand Cheroke
                    </div>
                  </CardHeader>

                  <CardContent className='h-full flex flex-col gap-6'>
                    <h2 className='text-slate-50 '>Setting The Bar For Adventure</h2>

                    <div className='w-full flex gap-3 h-auto'>
                      <Card className='flex items-center gap-4 px-3 py-1 basis-1/2 bg-black'>

                        <Image
                          src='/Mopar_logo_black.png'
                          alt='Mopar'
                          width={80}
                          height={80}
                          className="h-10 w-10"
                        />
                        <div className='flex flex-row md:flex-col leading-3 gap-1'>
                          <span className='text-sm font-semibold leading-none text-slate-50'>
                            Warranty Available
                          </span>
                        </div>

                      </Card>

                      <Card className='flex items-center gap-4 px-3 py-1 basis-1/2'>

                        <Image
                          src='/logos/bankLogo.png'
                          alt='Mopar'
                          width={50}
                          height={50}
                          className=" h-10 w-10"
                        />
                        <div className='flex flex-col leading-3'>
                          <span className='text-sm font-semibold leading-none'>
                            Finance Available
                          </span>
                        </div>
                      </Card>
                    </div>
                  </CardContent>

                  <CardFooter
                    className='flex flex-col gap-3'
                  >
                    <div className='flex w-full justify-end items-center gap-6'>
                      <Link href={"/vehicles/3"} className=' font-semibold text-sm text-slate-300'>
                        View Jeep Line up
                      </Link>

                      <Separator orientation='vertical' className='h-4' />

                      <Link href="/vehicles/model/16">
                        <ArrowRightCircleIcon className='h-12 text-white' />
                      </Link>
                    </div>
                  </CardFooter>
                </div>

              </Card>

              <Card className='flex flex-col overflow-hidden bg-white col-span-2 md:col-span-1'>

                <div className='relative min-h-56'>
                  <Image
                    src="/300.png"
                    alt=""
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='flex flex-col grow'>

                  <CardHeader className=''>
                    <Badge className='from-[#0245B2] bg-gradient-to-r to-[#0356db]'>New 2025 | Early Bird Offers</Badge>
                    <div className='text-2xl font-bold text-slate-900 flex items-center gap-3 pt-3'>
                      <Image
                        src='/logos/chryslerlogo.png'
                        alt='Mopar'
                        width={170}
                        height={80}
                        className="h-10 object-contain"
                      />
                      <Separator orientation='vertical' className='h-4' />
                      300
                    </div>
                  </CardHeader>

                  <CardContent className='h-full flex flex-col gap-6'>
                    <h2 className='text-slate-700 pb-2'>
                      High-performance And Personal Luxury
                    </h2>

                    <div className='w-full flex gap-3 h-auto'>
                      <Card className='flex items-center gap-4 px-3 py-1 basis-1/2'>

                        <Image
                          src='/Mopar_logo.svg'
                          alt='Mopar'
                          width={80}
                          height={80}
                          className="h-10 w-10"
                        />
                        <div className='flex flex-row md:flex-col leading-3 gap-1'>
                          <span className='text-sm font-semibold leading-none'>
                            Warranty Available
                          </span>
                        </div>

                      </Card>

                      <Card className='flex items-center gap-4 px-3 py-1 basis-1/2'>

                        <Image
                          src='/logos/bankLogo.png'
                          alt='Mopar'
                          width={50}
                          height={50}
                          className=" h-10 w-10"
                        />
                        <div className='flex flex-col leading-3'>
                          <span className='text-sm font-semibold leading-none'>
                            Finance Available
                          </span>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                  <CardFooter
                    className='flex flex-col gap-3'
                  >
                    <div className='flex w-full justify-end items-center gap-3'>
                      <Link href={"/vehicles/2"} className=' font-semibold text-sm text-slate-600'>
                        View Chrysler Line up
                      </Link>
                      <Separator orientation='vertical' className='h-4' />

                      <Link href="/vehicles/model/5">
                        <ArrowRightCircleIcon className='h-12 text-slate-600' />
                      </Link>
                    </div>
                  </CardFooter>
                </div>

              </Card>

              <Card className='flex flex-col overflow-hidden bg-[#9C101A] col-span-2 md:col-span-1'>

                <div className='relative min-h-56'>
                  <Image
                    src="/fiatrange.jpg"
                    alt=""
                    fill={true}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className='object-cover w-full h-full'
                  />
                </div>

                <div className='flex flex-col grow'>

                  <CardHeader className=''>
                    <Badge className='from-black bg-gradient-to-r to-[#4d090e]'>Fleet | Mega Volume Discounts</Badge>
                    <h2 className='text-center text-white font-bold text-2xl py-3'>
                      Professional Range
                    </h2>

                    <div className='text-xl font-bold text-slate-50 flex items-center justify-center gap-3 '>
                      <Image
                        src='/logos/Fiat_professional_logo_white.png'
                        alt='Mopar'
                        width={50}
                        height={90}
                        className="h-12 object-contain"
                      />
                      <Separator orientation='vertical' className='h-4' />
                      <Image
                        src='/logos/ram_professional.jpeg'
                        alt='Mopar'
                        width={140}
                        height={80}
                        className="h-10 object-contain"
                      />

                    </div>

                  </CardHeader>

                  <CardContent className='h-full flex items-center'>
                    <div className='w-full flex flex-col gap-3 h-auto'>

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
                            Finance Available
                          </span>
                        </div>
                      </Card>

                    </div>
                  </CardContent>

                  <CardFooter
                    className='flex flex-col gap-3'
                  >

                    <div className='flex w-full justify-end items-center gap-3'>
                      <Link href={"/business"} className=' font-semibold text-sm text-slate-100'>
                        Visit Business Center
                      </Link>
                      <Separator orientation='vertical' className='h-4' />

                      <Link href="/business">
                        <ArrowRightCircleIcon className='h-12 text-white' />
                      </Link>
                    </div>
                  </CardFooter>
                </div>

              </Card>

            </div>

            <Separator className="my-12" />

            {/* 
            <div className='flex flex-col lg:flex-row gap-8'>

              <Card className='overflow-hidden items-center hover:bg-[#0245B2]/90 bg-[#0245B2] md:basis-3/5'>
                <Link href="/parts" className='h-24 flex items-center'>
                  <div className='relative h-full w-[300px] max-w-[250px]'>

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

              <Card className='overflow-hidden items-center hover:bg-slate-50 md:basis-2/5'>
                <Link href="/parts" className='h-24 flex'>
                  <div className='relative h-full w-[300px] max-w-[250px]'>
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

            </div> */}

          </div>

          {/* <Separator className="my-6" />

           <h1>Join The Club</h1> 
           
                     <Separator className="my-8" />

           */}

        </div>

        <MoparSection />

        <div className='content-container-no-bg'>

          <Separator className="my-12" />

          <PostsPreview stories={stories} />

          <Separator className="my-12" />

        </div>


      </main >

    </ section >
  );
}
