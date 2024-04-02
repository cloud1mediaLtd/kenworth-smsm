import { Button } from 'components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

async function getData(id) {

  console.log(id)
  const res = await fetch(`https://smedbackend.fly.dev/vehicles/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function VehiclesPage({ params: { id } }) {
  const data = await getData(id)
  console.log(data)
  return (
    <section className='py-12 gap-6 flex flex-col'>
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
                data.Description ? <p className='text-sm text-gray-500'>{data.Description}</p> : <h1>filler text</h1>
              }
            </div>

          </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {data.Models.map((model) => (
            <Card key={model.ID} className=' w-full gap-6 items-center'>
              <div className='flex relative w-full h-32 items-center my-5'>
                <Image
                  src={`/${model.Image}`}
                  alt={model.Name}
                  className=''
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <Separator className='my-0' />
              <CardHeader>
                <CardTitle>
                  <div className='flex gap-3 items-center'>
                    <span className='text-xlarge-bold'>{data.Name}</span>
                    <Separator orientation='vertical' className='h-4' />
                    <div className='text-xlarge-bold'>
                      {model.Name}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>

                <div className='flex justify-between p-4'>
                  <div className='flex flex-col gap-4'>

                    <p>{model.Description}</p>
                    <div className='flex gap-6'>
                      <span className='text-gray-500'>Available Trims</span>
                    </div>

                    {model.Trims.map((trim) => (
                      <div key={trim.ID} className='flex gap-6'>

                        <span>{trim.Name}</span>
                        <p>{trim.Price}</p>
                      </div>
                    ))}
                  </div>
                  <Separator orientation='vertical' className='h-4' />

                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className='flex flex-col'>
                  <span className='text-gray-500 text-xsmall-regular leading-none'>Starting from</span>
                  <span className='text-gray-500 text-large-semi leading-none'>50,000 LD</span>
                </div>
                <Button asChild>
                  <Link href={`/vehicles/model/${model.ID}`}>
                    Read More...
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


