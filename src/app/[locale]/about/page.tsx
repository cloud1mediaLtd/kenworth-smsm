
import PageLayout from 'components/PageLayout';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';


export default async function aboutPage() {
  const t = await getTranslations('AboutPage');
  const isRtl = useLocale() === "ar"

  return (
    <>
      <PageLayout title={'About'}>
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-3">
            {t.rich('description', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,

            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('history', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,

            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('mission', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,

            })}
          </div>



        </div>



        {/* <div className='flex flex-col gap-6 pt-12'>


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
            <h1>Contact Us</h1>
            <p>
              Contact information for the dealership, including phone numbers, email addresses, and physical addresses. This section could also include a contact form or links to social media profiles.
            </p>
          </div>
        </div> */}
      </PageLayout>
    </>
  );
}
