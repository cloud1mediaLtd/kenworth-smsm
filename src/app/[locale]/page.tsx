import { useLocale } from 'next-intl';
import Hero from 'components/hero';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import Image from 'next/image';
import { Separator } from 'components/ui/separator';
import { Button } from 'components/ui/button';
import Link from 'next/link';

export default async function IndexPage() {

  const locale = useLocale();
  // add booking for free mot

  return (
    <section className=''>

      <Hero />

      <main>
        <div className='content-container-no-bg mt-3'>

          <h1 className='mt-6'>Latest Offers</h1>

          <div className='grid grid-cols-2 gap-6 w-full pt-4'>
            <Card className='col-span-2 flex overflow-hidden'>
              <div className='relative min-h-48 basis-3/5'>
                <Image
                  id='hero-image'
                  src="https://automaxgroup.me/wp-content/uploads/2023/08/2024-Jeep-Grand-Cherokee-4xe.jpg"
                  alt=""
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className='flex flex-col w-full'>

                <CardHeader>
                  <CardTitle className='text-xlarge-semi'>The all new 2025 Jeep Grand Cheroke</CardTitle>
                </CardHeader>

                <CardFooter
                  className='flex flex-wrap items-center gap-3'
                >
                  <div className='flex flex-wrap lg:flex-nowrap w-full gap-3'>
                    <Card className='py-3 px-5 flex w-full  gap-3 items-center h-12'>

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

                    <Card className='py-3 px-5 flex w-full gap-3 items-center h-12'>
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

            <Card className='flex flex-col md:flex-row overflow-hidden items-center bg-[#0245B2] text-white'>
              <div className='relative min-h-32 basis-1/3 min-w-full md:min-w-0'>

                <Image
                  src='/moparService.jpeg'
                  alt='Mopar'
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />

              </div>
              <div className='p-4'>
                <h3>Free Oil & filter change on our brands*</h3>
                <span className='text-xs'>Find out more...</span>
              </div>

            </Card>

            <Card className='flex flex-col md:flex-row overflow-hidden items-center bg-black text-white'>
              <div className='relative min-h-32 basis-1/3 min-w-full md:min-w-0'>
                <Image
                  src='/WINCH_GUARD_LIGHT_MOUNTING BRACKETS.jpg'
                  alt='Mopar'
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className='p-4'>
                <h3>New Jeep Wrangler Accessories in Stock</h3>
                <span className='text-xs'>Find out more...</span>
              </div>
            </Card>

          </div>

          {/* <Separator className="my-6" />

           <h1>Join The Club</h1> */}

          <Separator className="my-6" />

          <h1>News & Events</h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-4'>

            <Card className='overflow-hidden'>
              <div className='relative min-h-48 basis-3/5'>
                <Image
                  id='hero-image'
                  src="/logos/10-anniverary-logo.png"
                  alt=""
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle>Celebrating 10 years</CardTitle>
                <CardDescription>Just arrived in stock genuine accessoriess</CardDescription>
              </CardHeader>
            </Card>

            <Card className='overflow-hidden'>
              <div className='relative min-h-48 basis-3/5'>
                <Image
                  id='hero-image'
                  src="/900x506_cmsv2_80e41573-6970-540b-a802-69b81ce043ed-7192424.webp"
                  alt=""
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle>See You At Libya Rally</CardTitle>
                <CardDescription>Just arrived in stock genuine accessoriess</CardDescription>
              </CardHeader>
            </Card>

            <Card className='overflow-hidden'>
              <div className='relative min-h-48 basis-3/5'>

                <Image
                  id='hero-image'
                  src="/KRADS_P7.jpg"
                  alt=""
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />

              </div>
              <CardHeader>
                <CardTitle>Benghazi Showroom Now Open</CardTitle>
                <CardDescription>Just arrived in stock genuine accessoriess</CardDescription>
              </CardHeader>

            </Card>

          </div>
        </div>

      </main>

    </ section >
  );
}
