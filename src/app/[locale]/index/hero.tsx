// components/homecomponents/hero.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { Card } from 'components/ui/card';
import BrandsOnly from '../../../components/brandsonly';

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
            <div className='content-container-no-bg -mt-10 z-2 relative'>
                <Card className='relative overflow-hidden px-3'>
                    {/* Scrollable content container inside the card */}
                    <div className="brands-scroll-container overflow-x-auto">
                        <BrandsOnly className={"min-w-[700px]"} locale={locale} />
                        {/* Padding div to ensure content is not obscured by the overlay */}
                        <div className="end-padding md:hidden" />
                    </div>
                    {/* Fixed overlay */}
                    <div className="brands-overlay md:hidden" />
                </Card>
            </div>
        </section>
    );
}


