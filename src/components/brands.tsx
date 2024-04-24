import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Card } from './ui/card';

async function getData() {
    const res = await fetch('https://smedbackend.fly.dev/vehicles', { next: { revalidate: 3600 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Brands({ locale }) {
    const data = await getData();

    console.log(data);

    for (const brand of data) {
        brand.Models.sort((a, b) => a.Name.localeCompare(b.Name));
    }

    const isRTL = locale === 'ar';
    return (
        <section className="flex flex-col gap-4">
            {data.map((brand) => (
                <div key={brand.ID} className='overflow-hidden relative'>
                    <div className='flex flex-col items-center'>

                        <div className='relative w-full max-w-52 md:max-w-44 h-32'>
                            <Image
                                src={`/${brand.Image}`}
                                alt={brand.Name}
                                fill={true}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        <div className='flex gap-6 brands-scroll-container overflow-x-auto'>

                            {brand.Models.map((model) => (

                                <Link href={`/vehicles/model/${model.ID}`} key={model.ID} className='flex min-w-44'>
                                    <Card className=''>
                                        <div className='h-44 align-middle flex items-center justify-center p-1'>
                                            <Image src={`/${model.Image}`} alt={model.Name} width={180} height={180} />
                                        </div>
                                        <div className='text-center pt-4 font-bold'>
                                            <span>{isRTL && model.Name_ar ? model.Name_ar : model.Name}</span>
                                        </div>
                                        <div className="flex flex-wrap pt-2 justify-center">
                                        </div>
                                    </Card>
                                </Link>

                            ))}
                        </div>
                        <div className="end-padding md:hidden" />


                    </div>
                    <Separator
                        orientation='horizontal'
                        className='mt-6'
                    />
                    <div className="brands-overlay md:hidden" />

                </div>
            ))}
        </section >
    );
}
