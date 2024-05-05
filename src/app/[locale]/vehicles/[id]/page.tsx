import { Button } from 'components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import VehicleBreadCrumb from '../components/breadCrumb';

async function getData(id: string) {

  console.log(id)
  const res = await fetch(`https://smedbackend.fly.dev/vehicles/${id}`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  console.log(data)

  return data;
}


export default async function VehiclesPage({ params: { id } }) {
  const data = await getData(id)
  // const { content } = await fetchStoryblokData(id);


  const locale = useLocale();
  const isRTL = locale === 'ar';


  return (

    <section className=' gap-6 flex flex-col'>

      <Suspense fallback={<>loading...</>}>

        <VehicleBreadCrumb topLink={data.name} topLinkHref={`${data.id}`} />

        <div className='flex flex-col md:flex-row gap-6 items-center w-full'>
          <div className='relative w-full max-w-52 md:max-w-44 h-32'>
            <Image
              src={`/${data.image}`}
              alt={data.name}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className='flex gap-6 basis-3/4 items-center'>
            <Separator
              orientation='vertical'
              className='h-20 hidden md:block'
            />
            {
              isRTL && data.description_ar ? <p className='text-sm text-gray-500'>{data.description_ar}</p> : <p className='text-sm text-gray-500'>{data.description}</p>
            }
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {data.models?.map((model) => (
            <Card key={model.id} className=' w-full gap-6 items-center'>
              <div className='flex relative w-full min-h-[200px] items-center my-5'>
                <Image
                  src={`/${model.image}`}
                  alt={model.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='object-contain'
                />
              </div>

              <Separator className='my-0' />
              <CardHeader>
                <CardTitle>
                  <div className='flex gap-3 items-center'>
                    <span className='text-xlarge-bold'>{isRTL && data.name_ar ? data.name_ar : data.name}</span>
                    <Separator orientation='vertical' className='h-4' />
                    <div className='text-xlarge-bold'>
                      {isRTL && model.name_ar ? model.name_ar : model.name}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>

                <div className='flex justify-between'>
                  <div className='flex flex-col gap-4'>
                    <p>{isRTL && model.description_ar ? model.description_ar : model.description}</p>
                  </div>

                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className=''>

                </div>
                <Button asChild>
                  <Link href={`/vehicles/model/${model.id}`}>
                    {isRTL ? 'عرض' : 'View'}
                  </Link>
                </Button>
              </CardFooter>

            </Card>

          ))}
        </div>

      </Suspense>
    </section>

  );
}


