'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import Hero from 'app/[locale]/index/hero';

export default function aboutPage() {
  const t = useTranslations('BusinessCenterPage');

  return (
    <>


      <PageLayout title={t('title')}>
        <div className="">
          {t.rich('description', {
            p: (chunks) => <p className="mt-4 text-lg">{chunks}</p>,

          })}
        </div>

        <div className='pt-12'>
          <ul className='flex flex-col gap-6 list-decimal list-inside'>
            <li><strong>Overview of Business Services</strong>: Introduction to services offered to businesses, including fleet sales, leasing, and B2B service packages.</li>
            <li><strong>Fleet Management Solutions</strong>: Details on vehicle procurement, maintenance plans, telematics, and optimization advice.</li>
            <li><strong>Special Offers for Businesses</strong>: Exclusive offers, discounts, or incentives for business clients, such as bulk buying discounts and special financing terms.</li>
            <li><strong>Customization and Upfitting Services</strong>: Information on vehicle customization and special fittings like cargo management systems and specialized equipment installations.</li>
            <li><strong>Testimonials and Case Studies</strong>: Testimonials and case studies from business clients, building credibility and showcasing expertise.</li>
            <li><strong>Government and Institutional Sales</strong>: Information tailored to government and institutional clients, including details on procurement compliance and specially priced vehicles.</li>
            <li><strong>Leasing and Financing Options</strong>: Description of flexible and cost-effective leasing and financing options available to business clients.</li>
            <li><strong>Dedicated Business Team</strong>: Introduction to the business sales team, with expertise in handling business clients and direct contact information.</li>
            <li><strong>Contact Form and Appointment Scheduling</strong>: Easy-to-use contact form for business inquiries and direct appointment scheduling options.</li>
            <li><strong>Regulatory and Compliance Information</strong>: Information on regulatory compliance and dealership assistance in meeting these requirements.</li>
            <li><strong>Environmental and Sustainability Information</strong>: Details on environmentally friendly vehicles like electric or hybrid models for fleets.</li>
            <li><strong>Events and Networking Opportunities</strong>: Information on business events, workshops, or networking opportunities hosted or participated in by the dealership.</li>
          </ul>

        </div>
      </PageLayout>
    </>
  );
}
