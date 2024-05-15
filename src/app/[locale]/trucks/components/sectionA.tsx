import Image from "next/image";

type Props = {
    title?: string;
    desc?: string;
    title2?: string;
    desc2?: string;
    image?: string;
}

const SectionA = async ({ title, title2, desc, desc2, image }: Props) => {
    return (

        <div className="flex flex-col lg:flex-row gap-6 relative">
            <div className='relative min-h-52 basis-1/3'>
                {image ? (
                    <>
                        <Image
                            src={image}
                            alt=""
                            fill={true}
                            sizes='(max-width: 640px) 640px, 1920px'
                            className='object-cover'
                        />
                    </>
                )
                    : (<>
                        Add Image
                    </>)}
            </div>

            <div className="relative flex flex-col gap-4 basis-2/3">
                <div className="flex flex-col gap-6">
                    <div className="flex relative z-20">
                        <div className="flex flex-col gap-2 justify-center">
                            <h2 className="text-xl md:text-2xl font-bold">
                                {title}
                            </h2>
                            <p>
                                {desc}
                            </p>
                        </div>
                    </div>

                    <div className="flex relative z-20">
                        <div className="flex flex-col gap-2 justify-center">
                            <h2 className="text-2xl font-bold">
                                {title2}
                            </h2>
                            <p>
                                {desc2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SectionA;