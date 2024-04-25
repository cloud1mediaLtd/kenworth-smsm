import { useLocale } from 'next-intl';
import Hero from 'app/[locale]/index/hero';
import { Separator } from 'components/ui/separator';
import { getStoryblokApi } from '@storyblok/react';
import PostsPreview from 'app/[locale]/index/postsPreview';
import MoparSection from 'components/moparSection';
import Offers from './index/offers';
import FleetOffers from './index/fleetOffersCard';
import { Card } from 'components/ui/card';
import BrandsOnly from 'components/brandsonly';
import ServicesSection from './index/servicesSection';

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
  const stories = data?.stories;

  const locale = useLocale();

  return (
    <section className='relative'>

      <Hero />
      <div className='content-container-no-bg -mt-10 z-10 relative'>
        <Card className='px-3 sticky top-0 z-20'>
          {/* Scrollable content container inside the card */}
          <div className="brands-scroll-container overflow-x-auto">
            <BrandsOnly className="min-w-[700px]" locale={locale} />
            {/* Padding div to ensure content is not obscured by the overlay */}
            <div className="end-padding md:hidden" />
          </div>
        </Card>
      </div>
      <main>
        <div className='content-container-no-bg my-8'>
          <Offers />
          {/* <Separator className="my-8" />
          <ServicesSection /> */}
          <Separator className="my-8" />
          <FleetOffers />
          <Separator className="my-8" />
        </div>

        <MoparSection />
        <div className='content-container-no-bg'>
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
