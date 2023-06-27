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
                <div aria-hidden="true" className=" bg-gray-500 absolute inset-0 overflow-hidden">
                    <div className=''>
                        <Image
                            id='hero-image'
                            src="/Wrangler-driving-front.jpg"
                            alt=""
                            fill={true}
                            className='max-h-[450px]}'
                            style={{ objectFit: "cover" }}

                        />
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-blue-900 opacity-30" />
            <main>
                <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-40 text-center sm:py-50 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{t('title')}</h1>
                    <p className="mt-4 text-xl text-white">
                        {t('description')}
                    </p>
                    <div className="mt-6">
                        <a
                            href="/vehicles"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800"
                        >
                            {t('button')}
                        </a>


                    </div>
                </div>



            </main>
        </section>


    );
}
