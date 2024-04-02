import Link from "next/link";
import Image from 'next/image';

interface PropItems {
    locale: string;
    className?: string;
}


async function getData() {
    const res = await fetch('https://smedbackend.fly.dev/vehicles', { next: { revalidate: 3600 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function BrandsOnly({ locale, className }: PropItems) {
    const data = await getData();
    const isRTL = locale === 'ar';

    return (
        <div className={`flex items-center w-full ${className}`}>
            <div className={"flex w-full justify-between gap-6 items-center py-2 px-2"}>
                {data.map((brand, subIndex) => {
                    const { width, height } = getImageSizeById(brand.ID);
                    return (
                        <>
                            <div key={brand.ID} className="flex items-center justify-between">
                                <Link href={`/vehicles/${brand.ID}`} className='max-w-20 lg:max-w-32'>
                                    <Image
                                        src={`/${brand.Image}`}
                                        alt={brand.Name}
                                        width={width}
                                        height={height}
                                    />
                                </Link>
                            </div>
                        </>
                    );
                })}
                <Image
                    src='/Mopar_logo.svg'
                    alt='Mopar'
                    width={100}
                    height={100}
                    className="max-w-16 lg:max-w-24"
                />

            </div>
        </div>
    );
}


function getImageSizeById(brandId) {
    // Example lookup for image sizes based on brand ID
    const sizeLookup = {
        '1': { width: 180, height: 120 },
        '2': { width: 200, height: 160 },
        '3': { width: 100, height: 100 },
        '4': { width: 180, height: 140 },
        '5': { width: 100, height: 100 },
        '6': { width: 100, height: 140 },
    };
    // Default size if ID not found in lookup
    const defaultSize = { width: 120, height: 120 };

    return sizeLookup[brandId] || defaultSize;
}