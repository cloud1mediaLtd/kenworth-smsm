'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import { Separator } from 'components/ui/separator';

export default function aboutPage() {
  const t = useTranslations('BusinessCenterPage');

  return (
    <>


      <PageLayout title={t('title')}>
        {/* <div className="">
          {t.rich('description', {
            p: (chunks) => <p className="mt-4 text-lg">{chunks}</p>,

          })}
        </div> */}

        <div className='pt-12'>

          <div className='flex flex-col gap-3'>
            <p className='font-semibold'>
              At S.Med Sea Motors, we provide tailored solutions to enhance efficiency and support growth for businesses, government agencies, charities, and organizations. Our services include expert fleet sales, comprehensive B2B packages, and personalized support to meet the unique needs of every client.
            </p>

            <p className='font-semibold'>
              We aim to be a catalyst for your success, offering personalized solutions that empower you to improve operational capabilities and achieve significant impact. Our dedicated team provides the expertise and tools needed to navigate challenges and excel in today's competitive environment.
            </p>
          </div>


          <Separator className="my-8" />

          <div className='flex flex-col gap-3 pt-6'>
            <h2>Fleet Management Solutions</h2>

            <p className='font-semibold'>
              At S.Med Sea Motors, we offer customized Fleet Management Solutions to streamline operations, reduce costs, and enhance fleet performance. Let our expert team provide high-quality vehicles for your fleet, so you can focus on running your enterprise efficiently.
            </p>


            <ul className='flex flex-col gap-6 list-disc list-inside text-slate-600'>

              <li>
                <strong className='text-slate-900'>Maintenance Plans</strong>: To keep your fleet running smoothly, we offer comprehensive maintenance plans that are essential for prolonging the life and efficiency of your vehicles. Our maintenance services ensure that each vehicle in your fleet is maintained to the highest standards, reducing downtime and operational disruptions.
              </li>

              <li>
                <strong className='text-slate-900'>Customized Support</strong>: We understand that every fleet's needs are unique. Our team provides personalized support to help you navigate the complexities of managing a fleet, from acquisition through ongoing maintenance. Whether you need advice on the best vehicle options for your specific activities or assistance with managing your fleet's servicing schedules, we're here to support every aspect of your fleet management.
              </li>

              <li>
                <strong className='text-slate-900'>Scalable Solutions</strong>: As your organization grows, so do your fleet needs. Our services are designed to scale with your growth, ensuring that you always have the right vehicles and support to meet the evolving demands of your business.
              </li>

            </ul>

          </div>

          <Separator className="my-8" />

          <div className='flex flex-col gap-3 pt-6'>
            <h2>Government and Institutional Sales</h2>
            <p className='font-semibold'>
              At S.Med Sea Motors, we specialize in providing vehicle solutions tailored for government and institutional clients. With extensive experience in navigating the complexities of procurement, we offer compliance, competitive pricing, and customized solutions to meet your specialized needs.
            </p>

            <ul className='flex flex-col gap-4 list-disc list-inside text-slate-600'>
              <li>
                <strong className='text-slate-900'>Compliance and Procurement:</strong> We understand government regulations and procurement guidelines, ensuring all vehicle sales and modifications meet compliance standards for a smooth, transparent process.
              </li>
              <li>
                <strong className='text-slate-900'>Customized Fleet Solutions:</strong> We recognize diverse sector needs and provide specialized upfitting, from cargo management for logistics to tool racks for construction, to optimize efficiency and functionality.
              </li>
              <li>
                <strong className='text-slate-900'>Safety and Compliance Upgrades:</strong> We modify vehicles with enhanced security features, communication tools, and technology integrations to meet your operational requirements, ensuring alignment with government safety regulations.
              </li>
              <li>
                <strong className='text-slate-900'>Large-Scale Contract Experience:</strong> Our expertise in managing substantial fleets allows us to handle contracts efficiently, ensuring precision from consultation through delivery and after-sales support.
              </li>
              <li>
                <strong className='text-slate-900'>Dedicated Account Management:</strong> We assign account managers to ensure consistent service and communication, providing specialized support tailored to the public sector.
              </li>
              <li>
                <strong className='text-slate-900'>Training and Support:</strong> We offer training on vehicle operation, maintenance, and safety procedures to help staff utilize the vehicles effectively while adhering to regulatory requirements.
              </li>
            </ul>
          </div>

          <Separator className="my-8" />

          <div className='flex flex-col gap-3 pt-6'>
            <h2>Regulatory and Compliance</h2>
            <p className='font-semibold'>
              At S.Med Sea Motors, we collaborate with manufacturers, Mopar, and third-party companies to modify vehicles to meet strict regulatory and compliance standards in Libya. Our tailored solutions address specific requirements across sectors like medical, fire, police, military, and hazardous materials, ensuring full compliance with local regulations.
            </p>

            <ul className='flex flex-col gap-4 list-disc list-inside text-slate-600'>
              <li>
                <strong className='text-slate-900'>Medical Sector:</strong> Vehicles are designed with secure transportation, proper equipment storage, and efficient patient care, adhering to strict industry standards.
              </li>
              <li>
                <strong className='text-slate-900'>Fire Department:</strong> Emergency response vehicles are equipped for rapid deployment, meeting safety regulations and providing reliable performance during fire incidents.
              </li>
              <li>
                <strong className='text-slate-900'>Police and Security:</strong> Law enforcement fleets include advanced security features and high durability, aligned with legal standards.
              </li>
              <li>
                <strong className='text-slate-900'>Military Operations:</strong> Vehicles comply with military standards for durability and adaptability, ensuring reliable performance across various terrains.
              </li>
              <li>
                <strong className='text-slate-900'>Hazardous Materials Management:</strong> Secure transport and handling solutions meet Libya's strict safety regulations, preventing spills or contamination.
              </li>
            </ul>
          </div>

          <Separator className="my-8" />

          <div className='flex flex-col gap-3 pt-6'>
            <h2>Taxi Companies and Special Incentives</h2>
            <p className='font-semibold'>
              At S.Med Sea Motors, we recognize the unique needs of taxi companies and provide specialized incentives to help them operate efficiently. We deliver vehicles designed for the demanding requirements of the taxi industry, ensuring durability, safety, and cost-effectiveness.
            </p>

            <ul className='flex flex-col gap-4 list-disc list-inside text-slate-600'>
              <li>
                <strong className='text-slate-900'>Exclusive Discounts:</strong> We offer competitive pricing, including special discounts on fleet purchases, to support taxi companies in managing costs and maintaining profitability.
              </li>
              <li>
                <strong className='text-slate-900'>Maintenance and Support:</strong> We provide comprehensive after-sales support with priority service, discounts on parts, and maintenance packages for taxi fleets.
              </li>
            </ul>
          </div>




        </div>
      </PageLayout>
    </>
  );
}



// Dedicated Business Team
// Introduce your dedicated business sales team, highlighting their expertise in dealing with business clients. Provide direct contact information to facilitate easy communication, reinforcing your commitment to exceptional customer service.
// Contact Form and Appointment Scheduling
// Promote your easy-to-use online contact form and direct appointment scheduling system. Make it clear that getting in touch or arranging a meeting is simple and user-friendly, encouraging potential clients to take the first step towards benefiting from your services.
// Regulatory and Compliance Information
// Detail how you assist with regulatory compliance, ensuring that all vehicles and services meet the required standards. This is particularly important for industries with stringent regulatory requirements.
// Environmental and Sustainability Information
// Discuss your offerings of environmentally friendly vehicles, such as electric or hybrid models, and how these can help businesses reduce their carbon footprint and meet sustainability goals.
// Events and Networking Opportunities
// Finally, inform clients about any upcoming business events, workshops, or networking opportunities. These events can provide additional value, helping businesses connect with peers, learn new strategies, and stay updated on industry trends.