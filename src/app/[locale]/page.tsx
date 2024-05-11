import { useLocale } from 'next-intl';
import Hero from 'app/[locale]/index/hero';
import { Separator } from 'components/ui/separator';
import { getStoryblokApi } from '@storyblok/react';
import PostsPreview from 'app/[locale]/index/postsPreview';
import MoparSection from 'components/moparSection';
import Offers from './index/offers';
import FleetOffers from './index/fleetOffersCard';
import { Button } from 'components/ui/button';
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
      <div className='relative'>
        <Hero />
      </div>


      <main>
        <div className='content-container-no-bg my-8'>


          <div className='flex justify-between gap-1 items-center text-sm overflow-hidden p-4'>

            <div className='flex flex-col lg:flex-row gap-4'>
              <div className='flex flex-col gap-1 justify-center'>
                <div className='flex items-center gap-3'>
                  <h2 className='leading-none text-slate-400'>Welcome</h2>
                  <Separator orientation='vertical' className='h-8' />
                  <h1 className=' tracking-normal'>Gasos</h1>
                </div>

                <p className='text-sm pt-1'>
                  Official dealer of Kenworth trucks and genuine parts in Libya.
                  We offer a wide range of new vehicles, plus a full range of services, including maintenance, repairs, and spare parts.
                </p>
              </div>
              <div className=' flex lg:flex-col gap-3 items-center  basis-2/4'>
                <Button size="lg" className='w-full bg-kenbg' asChild>
                  <Link href='/vehicles' className='w-full'>All Trucks</Link>
                </Button>
                <Button size="lg" variant='secondary' className='w-full' asChild>
                  <Link href='/about' className='w-full'>About</Link>
                </Button>
              </div>
            </div>

          </div>
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
          {/* {stories ? (
            <PostsPreview stories={stories} />
          ) : (
            <p>Failed to load stories. Please refresh the page.</p>
          )} */}
        </div>
      </main>

    </section>
  );
}
