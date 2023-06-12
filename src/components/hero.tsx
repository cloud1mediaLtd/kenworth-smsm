// components/homecomponents/hero.tsx

import { useTranslations } from 'next-intl';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { useLocale } from 'next-intl';


export default function Hero() {
    const t = useTranslations('Hero');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    return (


        <section className="relative">
            <div className="bg-gray-900">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <div className=''>
                        <Image
                            id='hero-image'
                            src="/jeep.jpeg"
                            alt=""
                            fill={true}
                            className='max-h-[450px]}'
                            style={{ objectFit: "cover" }}

                        />
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
            <main>
                <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-40 text-center sm:py-50 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{t('title')}</h1>
                    <p className="mt-4 text-xl text-white">
                        {t('description')}
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                        {t('button')}
                    </a>
                </div>



            </main>
        </section>


    );
}
