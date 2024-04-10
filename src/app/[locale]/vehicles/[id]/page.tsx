import { Button } from 'components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

async function getData(id) {

  console.log(id)
  const res = await fetch(`https://smedbackend.fly.dev/vehicles/${id}`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function VehiclesPage({ params: { id } }) {
  const data = await getData(id)
  console.log(data)
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className='py-6 gap-6 flex flex-col'>
      <Suspense fallback={<>loading...</>}>
        <div>
          <div className='flex flex-col md:flex-row gap-6 items-center w-full'>
            <div className='relative w-full max-w-52 md:max-w-44 h-32'>
              <Image
                src={`/${data.Image}`}
                alt={data.Name}
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
                isRTL && data.Description_ar ? <p className='text-sm text-gray-500'>{data.Description_ar}</p> : <p className='text-sm text-gray-500'>{data.Description}</p>
              }
            </div>

          </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {data.Models.map((model) => (
            <Card key={model.ID} className=' w-full gap-6 items-center'>
              <div className='flex relative w-full min-h-[200px] items-center my-5'>
                <Image
                  src={`/${model.Image}`}
                  alt={model.Name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <Separator className='my-0' />
              <CardHeader>
                <CardTitle>
                  <div className='flex gap-3 items-center'>
                    <span className='text-xlarge-bold'>{isRTL && data.Name_ar ? data.Name_ar : data.Name}</span>
                    <Separator orientation='vertical' className='h-4' />
                    <div className='text-xlarge-bold'>
                      {isRTL && model.Name_ar ? model.Name_ar : model.Name}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>

                <div className='flex justify-between'>
                  <div className='flex flex-col gap-4'>
                    <p>{isRTL && model.Description_ar ? model.Description_ar : model.Description}</p>
                  </div>

                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className=''>

                </div>
                <Button asChild>
                  <Link href={`/vehicles/model/${model.ID}`}>
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


