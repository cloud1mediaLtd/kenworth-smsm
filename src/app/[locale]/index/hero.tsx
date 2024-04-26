// components/homecomponents/hero.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Card } from 'components/ui/card';
import BrandsContainer from 'components/brands/brandsContainer';
import BrandsOnly from 'components/brands/brandsonly';

export default function Hero() {

    const t = useTranslations('Hero');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    return (
        <section>
            <div className="relative min-h-[16rem]">

                {/* Decorative image and overlay */}
                <Image
                    id='hero-image'
                    src="/jeep_wrangler_homepage_1920x850.jpg"
                    alt=""
                    width={1920}
                    height={850}
                    sizes='(max-width: 640px) 640px, 1920px'
                    className='object-cover w-full min-h-[16rem] '

                />
                {/* <div className="relative flex  flex-col justify-center items-center px-6 text-center h-full py-16">
                    <h1 className="text-2xl font-bold tracking-tight text-white lg:text-6xl">{t('title')}</h1>
                    <p className="mt-4 text-xl text-white">
                        {t('description')}
                    </p>
                    <Button className="mt-6" asChild>
                        <Link href="/vehicles">

                            {t('button')}
                        </Link>
                    </Button>
                </div> */}
            </div>
            <div className='content-container-no-bg -mt-10 z-10 relative'>
                <Card className='px-3 sticky top-0 z-20'>
                    <div className="brands-scroll-container overflow-x-auto">
                        <BrandsOnly className="min-w-[700px]" locale={locale} />
                        <div className="end-padding " />
                    </div>
                </Card>
            </div>

        </section>
    );
}


