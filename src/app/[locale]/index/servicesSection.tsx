import { Badge } from "components/ui/badge";
import { Card } from "components/ui/card";
import { Separator } from "components/ui/separator";

const sectionFill = [
    {
        badge: '',
        bageColor: 'bg-blue-500',
        title: 'All Vehicles',
        description: 'Complete end-to-end commercial fleet solutions',
        bg: 'bg-black',
        large: false
    },
    {
        badge: '',
        bageColor: 'bg-green-500',
        title: 'Parts',
        description: 'Complete end-to-end commercial fleet solutions',
        bg: 'bg-white',
        large: false
    },
    {
        badge: '',
        bageColor: 'bg-red-500',
        title: 'Service',
        description: 'Complete end-to-end commercial fleet solutions',
        bg: 'bg-white',
        large: false
    }
];

export default function ServicesSection() {
    return (
        <section className=''>
            <div className='grid md:grid-cols-3 gap-6'>
                {sectionFill.map((section, index) => (
                    <Card key={index}
                        className=" flex flex-col items-center overflow-hidden p-4 bg-black"
                    >
                        <Badge className={`flex justify-center w-full ${section.bageColor}`}>
                            {section.badge}
                        </Badge>

                        <h2 className='text-slate-50 py-2'>
                            {section.title}
                        </h2>
                        <Separator className="my-0 opacity-15" />
                        <p className="text-md font-semibold text-center text-slate-50">
                            {section.description}
                        </p>

                    </Card>
                ))}

            </div>
        </section>
    );
}

