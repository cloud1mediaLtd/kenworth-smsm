"use client";
import Image from 'next/image';
import Link from 'next-intl/link';
import { useEffect, useState } from 'react';
import PageLayout from 'components/PageLayout';

export default function ModelsPage({ params: { id } }) {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const res = await fetch(`https://blooming-anchorage-31706-0fa311717c9a.herokuapp.com/models/${id}`);
        const brand = await res.json();
        setData(brand);
        console.log("data", brand);
    };

    useEffect(() => {
        fetchData();
    }, []);

    function mapData(model) {
        return (
            <PageLayout title={''}>
                <main className="sm:pt-0 xl:mx-auto xl:max-w-7xl">
                    <div className='items-center pb-5 grid grid-cols-4'>
                        <span><Link href={`/vehicles/${model.Brand.ID}`}>
                            <Image className='' src={`/${model.Brand.Image}`} alt={model.Brand.Name} width={180} height={180} />
                        </Link>
                        </span>
                        <span className=' text-2xl font-bolds'>{model.Name}</span>


                    </div>

                    <p className=''>{model.Description}</p>


                    < div key={model.ID}>
                        <Image
                            src={`/${model.Image}`}
                            alt={`/${model.Name}`}
                            width="500"
                            height="500"
                        />



                    </div>
                </main>
            </PageLayout>
        );
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return <>{mapData(data)}</>;
}

