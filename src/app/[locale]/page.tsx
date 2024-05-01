import { useLocale } from 'next-intl';
import Hero from 'app/[locale]/index/hero';
import { Separator } from 'components/ui/separator';
import { getStoryblokApi } from '@storyblok/react';
import PostsPreview from 'app/[locale]/index/postsPreview';
import MoparSection from 'components/moparSection';
import Offers from './index/offers';
import FleetOffers from './index/fleetOffersCard';
import { Button } from 'components/ui/button';
import { Card } from 'components/ui/card';
import Image from 'next/image';
import Link from 'next/link';


async function fetchData() {
  const sbParams = {
    starts_with: "posts",

  };
  const storyblokApi = getStoryblokApi();

  try {
    const response = await storyblokApi.get("cdn/stories/", sbParams, { cache: "no-store" });
    return { data: response.data, error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { data: null, error: error.toString() };
  }
}

export default async function IndexPage() {
  const { data, error } = await fetchData();
  const stories = data?.stories;

  const locale = useLocale();

  return (
    <section className='relative'>

      <Hero />

      <main>
        <div className='content-container-no-bg my-8'>

          <div className='flex flex-col lg:flex-row gap-4 p-6 md:p-0 sm:hidden'>
            <div className='flex flex-col gap-1 justify-center'>
              <h2>Welcome To South Mediterranean Sea Motors</h2>
              <p className='text-sm'>
                We are the official dealer of Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot and Mopar in Libya.
                We offer a wide range of new vehicles, as well as a full range of services, including maintenance, repairs, and spare parts.
              </p>
            </div>
            <div className='lg:p-6 flex lg:flex-col gap-3 items-center  basis-2/4'>
              <Button size="lg" className='w-full' asChild>
                <Link href='/vehicles' className='w-full'>All Vehicles</Link>
              </Button>
              <Button size="lg" variant='secondary' className='w-full' asChild>
                <Link href='/about' className='w-full'>About</Link>
              </Button>
            </div>
          </div>

          <Card className='sm:flex justify-between gap-6 items-center text-sm overflow-hidden h-64 hidden'>
            <div className="relative w-64 min-h-52 h-full md:flex grow bg-black hidden">
              <Image
                src='/KRADS_P7.jpg'
                alt='Mopar'
                fill={true}
                sizes='(max-width: 640px) 640px, 1920px'
                className='object-cover h-full w-full'
              />
            </div>
            <div className='flex flex-col lg:flex-row gap-4 p-6 md:p-0'>
              <div className='flex flex-col gap-1 justify-center'>
                <h2>Welcome To South Mediterranean Sea Motors</h2>
                <p className='text-sm'>
                  We are the official dealer of Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot and Mopar in Libya.
                  We offer a wide range of new vehicles, as well as a full range of services, including maintenance, repairs, and spare parts.
                </p>
              </div>
              <div className='lg:p-6 flex lg:flex-col gap-3 items-center  basis-2/4'>
                <Button size="lg" className='w-full' asChild>
                  <Link href='/vehicles' className='w-full'>All Vehicles</Link>
                </Button>
                <Button size="lg" variant='secondary' className='w-full' asChild>
                  <Link href='/about' className='w-full'>About</Link>
                </Button>
              </div>
            </div>

          </Card>
          <Separator className="my-8" />

          <Offers />
          {/* <Separator className="my-8" />
          <ServicesSection /> */}
          <Separator className="my-8" />

        </div>

        <MoparSection />
        <div className='content-container-no-bg'>
          <Separator className="my-8" />
          <FleetOffers />
          <Separator className="my-8" />
          {stories ? (
            <PostsPreview stories={stories} />
          ) : (
            <p>Failed to load stories. Please refresh the page.</p>
          )}
        </div>
      </main>

    </section>
  );
}
