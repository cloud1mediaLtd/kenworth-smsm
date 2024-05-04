import { Card } from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";
import Image from 'next/image';


export default function ChryslerBrandCard(data) {
    console.log("Dodge Brand Card", data.data);
    const cardData = data.data;

    return (
        <div key={cardData.brand.id} className="col-span-1 lg:col-span-1 rounded-xl">

            <Card key={cardData.brand.id} className='bg-black rounded-2xl'>
                <Card className='flex flex-col overflow-hidden rounded-none rounded-t-lg pb-3'>
                    <div className='flex gap-5 items-center p-4'>
                        <div className='flex items-center justify-center relative' style={{

                            height: cardData.isMobile ? cardData.mobileHeight : cardData.height,
                            width: cardData.isMobile ? cardData.mobileWidth : cardData.width,
                            minHeight: 44,
                            minWidth: 44
                        }}>
                            <Image
                                src={`/${cardData.brand.image}`}
                                alt={cardData.brand.name}
                                fill={true}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <Separator orientation='vertical' className='h-8' />
                        <div>
                            <span className="font-semibold">
                                Personal Luxury
                            </span>

                        </div>
                    </div>


                    <div className='flex gap-2 brands-scroll-container overflow-x-scroll overflow-hidden p-4 grow'>
                        {cardData.brand.models?.map((model) => (
                            <Link href={`/vehicles/model/${model.id}`} key={model.id} className='grow min-w-56'>
                                <div>
                                    <div className='h-44 align-middle flex items-center justify-center p-1 min-w-44'>
                                        <Image src={`/${model.image}`} alt={model.name} width={250} height={250} />
                                    </div>
                                    <div className='text-center pt-0 font-bold'>
                                        <span>{cardData.isRTL && model.name_ar ? model.name_ar : model.name}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </Card>
                <div className="flex justify-between items-center py-3 px-6 pt-3">
                    <h2 className='font-bold text-white'>{cardData.brand.name}</h2>
                    <div className="flex gap-2 items-center">

                        <Link href={`/vehicles/${cardData.brand.id}`}
                            className='border-2 border-white rounded-full px-3 text-sm text-white'>
                            More
                        </Link>
                    </div>
                </div>
            </Card>

        </div>
    );
}