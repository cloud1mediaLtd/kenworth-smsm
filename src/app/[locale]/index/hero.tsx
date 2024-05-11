// components/homecomponents/hero.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Card } from 'components/ui/card';
import BrandsOnly from 'components/brands/brandsonly';
import { Button } from 'components/ui/button';
import Link from 'next/link';

export default function Hero() {

    const t = useTranslations('Hero');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    return (
        <section>
            <div className="relative min-h-[24rem]">

                {/* Decorative image and overlay */}
                <div className='absolute inset-0'>
                    <Image
                        id='hero-image'
                        src="/100home3.jpg"
                        alt=""
                        width={1920}
                        height={850}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-cover w-full min-h-[24rem] '


                    />
                </div>
                <div className="relative flex flex-col justify-center items-center text-center h-full gap-4 pt-16">
                    <Image
                        id='hero-image'
                        src="/logos/kenworth-100-wordmark.png"
                        alt=""
                        width={1920}
                        height={850}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className=' object-contain h-20 w-auto'
                    />
                    {/* <h1 className="text-2xl font-bold tracking-tight text-white lg:text-6xl ">{t('title')}</h1> */}
                    <p className="text-xl md:text-4xl font-semibold text-shadow text-white italic">
                        {t('description')}
                    </p>
                    {/* <Button className="mt-6" asChild>
                        <Link href="/vehicles">

                            {t('button')}
                        </Link>
                    </Button> */}
                </div>
            </div>
            {/* <div className='content-container-no-bg -mt-10 z-10 relative'>
                <Card className='px-3 sticky top-0 z-20'>
                    <div className="brands-scroll-container overflow-x-auto">
                        <BrandsOnly className="min-w-[700px]" locale={locale} />
                        <div className="end-padding " />
                    </div>
                </Card>
            </div> */}

        </section>
    );
}


