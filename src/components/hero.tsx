// components/homecomponents/hero.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Button } from './ui/button';
import Link from 'next/link';
import { Card } from 'components/ui/card';
import BrandsOnly from './brandsonly';



export default function Hero() {

    const t = useTranslations('Hero');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    return (
        <section>
            <div className="relative h-[760px]">

                {/* Decorative image and overlay */}
                <div aria-hidden="true" className=" bg-gray-500 absolute inset-0 overflow-hidden">
                    <div className=''>
                        <Image
                            id='hero-image'
                            src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2024/wrangler/vlp/desktop/MY24-Wrangler-MCA-Overview-Lightbox-Gallery-Image-3-Desktop.jpg"
                            alt=""
                            fill={true}
                            className='max-h-[760px]}'
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-black opacity-50" />
                <div className="relative flex  flex-col justify-center items-center px-6 text-center h-full pb-16">
                    <h1 className="text-2xl font-bold tracking-tight text-white lg:text-6xl">{t('title')}</h1>
                    <p className="mt-4 text-xl text-white">
                        {t('description')}
                    </p>
                    <Button className="mt-6" asChild>
                        <Link href="/vehicles">

                            {t('button')}
                        </Link>
                    </Button>
                </div>
            </div>
            <div className='content-container-no-bg -mt-10 z-2 relative'>
                <Card className='relative overflow-hidden'>
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


