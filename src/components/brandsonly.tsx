import Link from "next/link";
import Image from 'next/image';

interface PropItems {
    locale: string;
    className?: string;
}

async function getData() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Access the environment variable
    const res = await fetch(`${apiUrl}/brands`, { next: { revalidate: 3600 } }); if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function BrandsOnly({ locale, className }: PropItems) {
    const data = await getData();
    const isRTL = locale === 'ar';

    data.sort((a, b) => a.ID - b.ID);


    return (
        <div className={`flex items-center w-full ${className}`}>
            <div className={"flex w-full justify-between gap-5 items-center py-3 px-4 h-24"}>
                {data.map((brand, subIndex) => {
                    const { width, height } = getImageSizeById(brand.ID);
                    return (
                        <>
                            <div key={brand.ID} className="flex items-center justify-between">
                                <Link href={`/vehicles/${brand.ID}`} className=''>
                                    <Image
                                        src={`/${brand.Image}`}
                                        alt={brand.Name}
                                        width={width}
                                        height={height}
                                        className="max-h-11 aspect-square object-contain"
                                    />
                                </Link>
                            </div>
                            {subIndex < data.length - 1 && <div className="h-4 w-0.5 bg-gray-300" />}

                        </>
                    );
                })}
                <div className="h-4 w-0.5 bg-gray-300" />
                <Image
                    src='/Mopar_logo.svg'
                    alt='Mopar'
                    width={50}
                    height={50}
                    className=""
                />

            </div>
        </div>
    );
}


function getImageSizeById(brandId) {
    // Example lookup for image sizes based on brand ID
    const sizeLookup = {
        '1': { width: 200, height: 200 },
        '2': { width: 200, height: 200 },
        '3': { width: 200, height: 200 },
        '4': { width: 200, height: 200 },
        '5': { width: 200, height: 200 },
        '6': { width: 200, height: 200 },
    };
    // Default size if ID not found in lookup
    const defaultSize = { width: 120, height: 120 };

    return sizeLookup[brandId] || defaultSize;
}