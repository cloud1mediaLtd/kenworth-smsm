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
        brand.models.sort((a, b) => a.name.localeCompare(b.name));
    }

    data.sort((a, b) => a.id - b.id);

    const isRTL = locale === 'ar';
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data?.map((brand) => {
                const { width, height, mobileWidth, mobileHeight } = getImageSizeById(brand.id);
                return (
                    <BrandCard key={brand.id} brand={brand} locale={locale} width={width} height={height} mobileWidth={mobileWidth} mobileHeight={mobileHeight} />
                )
            })}
        </section >
    );
}

function getImageSizeById(brandId) {
    const sizeLookup = {
        '1': { width: "220px", height: "0px", mobileWidth: "180px", mobileHeight: "36px" },
        '2': { width: "200px", height: "0px", mobileWidth: "180px", mobileHeight: "70px" },
        '3': { width: "180px", height: "0px", mobileWidth: "150px", mobileHeight: "36px" },
        '4': { width: "180px", height: "0px", mobileWidth: "150px", mobileHeight: "36px" },
        '5': { width: "180px", height: "100px", mobileWidth: "150px", mobileHeight: "70px" },
        '6': { width: "180px", height: "110px", mobileWidth: "160px", mobileHeight: "80px" },
    };
    return sizeLookup[brandId] || { width: "100px", height: "100px", mobileWidth: "100px", mobileHeight: "100px" };
}