import Link from "next/link";
import Image from 'next/image';
import { Separator } from "../ui/separator";

interface PropItems {
    locale: string;
    className?: string;
}

async function getData() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Access the environment variable
    const res = await fetch(`${apiUrl}/brands`, { next: { revalidate: 200 } }); if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function BrandsOnly({ locale, className }: PropItems) {
    const data = await getData();
    const isRTL = locale === 'ar';

    data.sort((a, b) => a.id - b.id);
    return (
        <div className={`flex items-center w-full ${className}`}>
            <div className={"flex w-full justify-between items-center h-24"}>
                {data.map((brand, subIndex) => {
                    const { width, height, mobileWidth, mobileHeight } = getImageSizeById(brand.id);
                    const logo = getLogoById(brand.id)

                    return (
                        <>
                            <div key={brand.ID} className="flex items-center justify-center w-full">
                                <Link href={`/vehicles/${brand.id}`}
                                    className={`flex items-center justify-center relative ${mobileWidth} ${mobileHeight} md:${width} md:${height}`}
                                >
                                    <Image
                                        src={logo || `/${brand.image}`}
                                        alt={brand.name}
                                        fill={true}
                                        className="object-contain"
                                    />
                                </Link>
                            </div>
                            {subIndex < data.length - 1 && <Separator className="h-4 w-0.5 bg-slate-600 mx-6" />}
                        </>
                    );
                })}
                <Separator className="h-4 w-0.5 bg-slate-600 mx-6" />
                <Link href={"/parts"} className="flex w-full h-full items-center justify-center">
                    <Image
                        src='/logos/mopar_logo.svg'
                        alt='Mopar'
                        width={60}
                        height={80}
                        className=""
                    />
                </Link>

            </div>
        </div>
    );
}


function getImageSizeById(brandId) {
    // Example lookup for image sizes based on brand ID
    const sizeLookup = {
        '1': { width: "h-10", height: "w-[160px]", mobileWidth: "h-8", mobileHeight: "w-[145px]" },
        '2': { width: "h-12", height: "w-[150px]", mobileWidth: "h-14", mobileHeight: "w-[150px]" },
        '3': { width: "h-12", height: "w-[110px]", mobileWidth: "h-14", mobileHeight: "w-[110px]" },
        '4': { width: "h-16", height: "w-[170px]", mobileWidth: "h-14", mobileHeight: "w-[160px]" },
        '5': { width: "h-14", height: "w-16", mobileWidth: "h-14", mobileHeight: "w-[55px]" },
        '6': { width: "h-14", height: "w-16", mobileWidth: "h-14", mobileHeight: "w-[50px]" },
    };


    // Default size if ID not found in lookup
    const defaultSize = { width: 120, height: 120 };

    return sizeLookup[brandId] || defaultSize;
}

function getLogoById(brandId) {
    const logoLookup = {
        // '1': '/logos/dodgelogo.png',
    };

    return logoLookup[brandId] || null;
}