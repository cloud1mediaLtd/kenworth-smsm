// components/homecomponents/hero.tsx

import { useTranslations } from 'next-intl';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { useLocale } from 'next-intl';


export default function Hero() {
    const t = useTranslations('IndexPage');
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
                            src="/jeep_renegade_trailhawk.jpeg"
                            alt=""
                            fill={true}
                            className='max-h-full rounded-lg'
                            style={{ objectFit: "cover" }}

                        />
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
            <main>
                <div id='hi' className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-90 text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
                    <p className="mt-4 text-xl text-white">
                        The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
                        while they're still in stock.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                        Shop New Arrivals
                    </a>
                </div>



            </main>
        </section>


    );
}
