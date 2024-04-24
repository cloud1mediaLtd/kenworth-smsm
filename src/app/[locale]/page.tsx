import { useLocale } from 'next-intl';
import Hero from 'app/[locale]/index/hero';
import { Separator } from 'components/ui/separator';
import { getStoryblokApi } from '@storyblok/react';
import PostsPreview from 'components/postsPreview';
import MoparSection from 'components/moparSection';
import Offers from './index/offers';


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

        <div className='content-container-no-bg mt-8'>

          <Offers />

        </div>
        <MoparSection />
        <div className='content-container-no-bg'>
          <Separator className="my-12" />
          <PostsPreview stories={stories} />
        </div>


      </main >

    </ section >
  );
}
