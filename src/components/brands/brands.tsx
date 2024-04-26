import BrandCard from './brandCard';

async function getData() {
    const res = await fetch('https://smedbackend.fly.dev/vehicles', { next: { revalidate: 300 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Brands({ locale }) {
    let data = await getData();

    for (const brand of data) {
        brand.Models.sort((a, b) => a.Name.localeCompare(b.Name));
    }

    data.sort((a, b) => a.ID - b.ID);

    const isRTL = locale === 'ar';
    return (
        <section className="flex flex-col gap-4">
            {data.map((brand) => {
                const { width, height, mobileWidth, mobileHeight } = getImageSizeById(brand.ID);
                return (
                    <BrandCard key={brand.ID} brand={brand} locale={locale} width={width} height={height} mobileWidth={mobileWidth} mobileHeight={mobileHeight} />

                )
            })}
        </section >
    );
}

function getImageSizeById(brandId) {
    const sizeLookup = {
        '1': { width: "180px", height: "55px", mobileWidth: "100px", mobileHeight: "30px" },
        '2': { width: "180px", height: "48px", mobileWidth: "150px", mobileHeight: "36px" },
        '3': { width: "180px", height: "48px", mobileWidth: "150px", mobileHeight: "36px" },
        '4': { width: "180px", height: "48px", mobileWidth: "150px", mobileHeight: "36px" },
        '5': { width: "180px", height: "48px", mobileWidth: "150px", mobileHeight: "36px" },
        '6': { width: "180px", height: "48px", mobileWidth: "150px", mobileHeight: "36px" },
    };
    return sizeLookup[brandId] || { width: "100px", height: "100px", mobileWidth: "100px", mobileHeight: "100px" };
}
