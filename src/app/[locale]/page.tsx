
import { useLocale, useTranslations } from 'next-intl';
import Hero from 'components/hero';
import { Card, CardDescription, CardHeader, CardTitle } from 'components/ui/card';
import Image from 'next/image';
import { Separator } from 'components/ui/separator';


export default async function IndexPage() {

  const locale = useLocale();
  // add booking for free mot

  return (
    <section className=''>

      <Hero />
      <div className='content-container-no-bg mt-8'>

        <h1>Latest Offers</h1>
      </div>
      <div className='content-container-no-bg mt-8'>

        <div className='grid grid-cols-2 gap-6'>
          <Card className='col-span-2 flex relative overflow-hidden'>
            <div className='relative h-48 basis-1/3'>
              <Image
                id='hero-image'
                src="https://automaxgroup.me/wp-content/uploads/2023/08/2024-Jeep-Grand-Cherokee-4xe.jpg"
                alt=""
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <CardHeader>
              <CardTitle>The all new 2025 Jeep Grand Cheroke</CardTitle>
              <CardDescription>Available for pre order</CardDescription>
            </CardHeader>
          </Card>

          <Card >
            <CardHeader>
              <CardTitle>We are proud to introduce to all new 2025 Wrangler</CardTitle>
              <CardDescription>Saturday: 10am - 4pm</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Separator className="my-6" />

        <h1>Join The Club</h1>

        <Separator className="my-6" />

        <h1>Blog & Media</h1>

        <Separator className="my-6" />

        <h1>Visit our showroom</h1>


      </div>

    </ section>
  );
}
