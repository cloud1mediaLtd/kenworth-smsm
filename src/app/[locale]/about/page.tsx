
import PageLayout from 'components/PageLayout';
import { Card } from 'components/ui/card';
import PostsPreview from '../index/postsPreview';
import { getStoryblokApi } from '@storyblok/react';

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

export default async function aboutPage() {
  // const t = useTranslations('AboutPage');
  const { data, error } = await fetchData();
  const stories = data?.stories;

  return (
    <>

      <PageLayout title={'About'}>
        {/* <div className="pb-8">
          {t.rich('description', {
            p: (chunks) => <p className="mt-4 text-lg">{chunks}</p>,

          })}
        </div> */}

        <div className='flex flex-col gap-6'>
          <div>
            <h1>Welcome</h1>
            <p>
              As the official dealer of Kenworth in Libya, Gasos Libya is proud to offer a wide range of new vehicles to meet your diverse needs. Our dealership provides more than just quality vehicles; we offer a full suite of services, including maintenance, repairs, and genuine spare parts, ensuring your vehicle performs at its best.
            </p>
            <p>
              Our dedicated team of professionals is here to guide you through every step of your automotive journey, whether you're purchasing a new vehicle or need expert care for your existing one. With a focus on exceptional customer service, we strive to build lasting relationships with our clients, providing reliable support and comprehensive solutions for all your automotive needs.
            </p>
            <p>
              We invite you to explore our extensive vehicle lineup and discover the unparalleled services that make Gasos Libya a trusted partner on the road.
            </p>
          </div>

          <div>
            <h1>History and Background</h1>
            <p>
              Information about the dealership's founding, key milestones, and how it has evolved over the years. This section could include details about the dealership’s growth, notable achievements, or its impact on the local community.
            </p>
          </div>

          <div>
            <h1>Mission and Vision Statements</h1>
            <p>
              At Gasos Libya, our mission is to redefine the automotive experience in Libya by providing unparalleled access to globally renowned brands. As the official dealer of Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot, and Mopar, we are proud to represent these iconic names for the first time in Libya, except Fiat, which last operated in the country before the 1970s, and Peugeot, reintroduced in 2014.
            </p>
            <p>
              We are committed to offering an exceptional range of new vehicles, along with comprehensive after-sales services such as maintenance, repairs, and genuine spare parts. By focusing on quality and customer satisfaction, we aim to build lasting relationships and be a trusted partner for all your automotive needs.
            </p>
            <p>
              Gasos Libya is here to deliver an automotive experience that reflects the reliability and innovation of our brands while ensuring that our clients receive personalized support and expertise every step of the way.
            </p>
          </div>

          <div>
            <h1>Community Involvement</h1>
            <p>
              Information about the dealership's involvement in the local community, including sponsorships, charitable activities, or partnerships with local organizations. This section could highlight the dealership's commitment to giving back and supporting the community.
            </p>
          </div>

          <div>
            <h1>Customer Testimonials</h1>
            <p>
              At Gasos Libya, our customers' satisfaction is at the heart of everything we do. We are proud to have earned the trust and loyalty of numerous esteemed companies and brands that rely on our vehicles and services.
            </p>

            <div className='grid grid-cols-3 gap-4 pt-6'>
              <Card className='flex items-center justify-center h-24'>Logo Here</Card>
              <Card className='flex items-center justify-center h-24'>Logo Here</Card>
              <Card className='flex items-center justify-center h-24'>Logo Here</Card>
              <Card className='flex items-center justify-center h-24'>Logo Here</Card>
              <Card className='flex items-center justify-center h-24'>Logo Here</Card>
              <Card className='flex items-center justify-center h-24'>Logo Here</Card>
            </div>

          </div>

          <div>
            <h1>Community Involvement</h1>
            <p>
              At Gasos Libya, we believe in driving positive change within our community. Our commitment to community involvement goes beyond offering quality vehicles and services. We take pride in being the official gold sponsor of the Libya Rally, supporting this adventurous and iconic event that embodies the spirit of exploration. Additionally, we are honored to be the official sponsor of the Libyan Jeep Enthusiast Club, where we celebrate the passion and camaraderie of Jeep lovers across the country.
            </p>

            <p>
              We are always seeking opportunities to sponsor events and clubs that align with the spirit and values of our brands, whether it's a thrilling motorsport competition or an enthusiast gathering. By supporting these initiatives, we aim to strengthen connections within the automotive community and foster a sense of belonging for all who share a love for Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot, and Mopar.
            </p>

            <p>
              We invite you to join us in building a vibrant community that celebrates automotive excellence and shared passion.
            </p>

            <div className='grid grid-cols-2 gap-4 pt-6'>
              <Card className='flex items-center justify-center h-24'>Libya Rally Logo Here</Card>
              <Card className='flex items-center justify-center h-24'>Jeep Club logo</Card>
            </div>

          </div>

          <div className='pt-4'>
            <h1>Gallery or Virtual Tour</h1>
            <p>
              Explore the world of Gasos Libya through our Gallery and Virtual Tour, where you can discover our impressive selection of Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot, and Mopar vehicles. Get a close-up view of their innovative features and meticulous craftsmanship, and take a virtual stroll through our showroom to find the perfect vehicle that matches your style and needs.            </p>
            <div>
              <Card className='flex items-center justify-center h-64 mt-4' >Logo Here</Card>
            </div>
          </div>

          <div>
            <h1>News and Events</h1>
            <p>
              Stay up to date with the latest at Gasos Libya through our News and Events section. Here, you'll find exciting announcements, insightful industry updates, and information about upcoming events. Whether it's a thrilling rally, an exclusive vehicle launch, or a community gathering, this is your hub for all things related to Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot, and Mopar in Libya.
            </p>
            {stories ? (
              <PostsPreview stories={stories} />
            ) : (
              <p>Failed to load stories. Please refresh the page.</p>
            )}
          </div>



          <div>
            <h1>Contact Us</h1>
            <p>
              Contact information for the dealership, including phone numbers, email addresses, and physical addresses. This section could also include a contact form or links to social media profiles.
            </p>

          </div>

        </div>

      </PageLayout>

    </>
  );
}
