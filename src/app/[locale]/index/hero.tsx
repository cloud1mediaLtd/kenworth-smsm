// components/homecomponents/hero.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function Hero() {

    const t = useTranslations('Hero');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    return (
        <section>
            <div className="relative ">
                {/* Decorative image and overlay */}
                <Image
                    id='hero-image'
                    src="/100home3.jpg"
                    alt=""
                    width={1920}
                    height={850}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className=' object-cover w-full min-h-44 '
                />
                <div className="absolute inset-0 flex flex-col items-center  h-full gap-4 pt-4 md:pt-16 px-4">
                    <Image
                        id='hero-image'
                        src="/logos/kenworth-100-wordmark.png"
                        alt=""
                        width={1920}
                        height={850}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-contain w-full max-w-[250px]'
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


