'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import Hero from 'app/[locale]/index/hero';

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
            <h2>Introduction</h2>
            <p>
              At S.Med Sea Motors, we are committed to providing tailored solutions designed
              to enhance operational efficiency and support growth across a variety of sectors,
              including businesses, government agencies, charities, and organizations.
              Our offerings include expert fleet sales, robust B2B service packages,
              and customized support aimed at meeting the unique needs of each client we serve.
            </p>

            <p>
              We recognize the diverse challenges faced by each sector—whether it's a non-profit seeking
              to maximize resource efficiency, a government entity navigating procurement regulations,
              or a business aiming to streamline operations. Our dedicated team is equipped with the
              expertise and innovative tools needed to help you achieve your goals effectively.
            </p>

            <p>
              Our goal is to partner with you as more than just a provider; we aim to be a catalyst for
              your success. By offering personalized solutions and dedicated support, we enable you to
              enhance your operational capabilities and achieve significant impact. Choose S.Med Sea Motors
              to empower your organization with the strategic insights and tools necessary to excel in today's
              competitive environment.
            </p>
          </div>

          <div className='flex flex-col gap-3 pt-6'>
            <h2>Fleet Management Solutions</h2>
            <p>
              At S.Med Sea Motors, we understand that managing a fleet can be complex and resource-intensive.
              That's why we offer tailored Fleet Management Solutions designed to streamline operations, reduce costs,
              and enhance the performance of your fleet.
            </p>

            <ul className='flex flex-col gap-6 list-disc list-inside'>

              <li>
                <strong>Maintenance Plans</strong>: To keep your fleet running smoothly, we offer comprehensive maintenance plans that are essential for prolonging the life and efficiency of your vehicles. Our maintenance services ensure that each vehicle in your fleet is maintained to the highest standards, reducing downtime and operational disruptions.
              </li>

              <li>
                <strong>Customized Support</strong>: We understand that every fleet's needs are unique. Our team provides personalized support to help you navigate the complexities of managing a fleet, from acquisition through ongoing maintenance. Whether you need advice on the best vehicle options for your specific activities or assistance with managing your fleet's servicing schedules, we're here to support every aspect of your fleet management.
              </li>

              <li>
                <strong>Scalable Solutions</strong>: As your organization grows, so do your fleet needs. Our services are designed to scale with your growth, ensuring that you always have the right vehicles and support to meet the evolving demands of your business.
              </li>

            </ul>

            <p>
              Partner with S.Med Sea Motors to ensure your fleet is equipped with high-quality vehicles that drive your organization forward. Let our expert team handle the specifics, allowing you to focus on what you do best — running your enterprise.
            </p>
          </div>


          <div className='flex flex-col gap-3 pt-6'>
            <h2>Government and Institutional Sales</h2>
            <p>
              At S.Med Sea Motors, we specialize in providing tailored vehicle solutions to government and institutional clients. With years of experience in meeting the unique demands of these entities, we understand the complexities and requirements of governmental and institutional procurement processes and are adept at navigating these challenges to deliver the best outcomes.
            </p>

            <ul className='flex flex-col gap-6 list-disc list-inside'>

              <li>
                <strong>Compliance and Procurement Expertise</strong>: Our team is well-versed in the specific regulatory and compliance requirements that government and institutional clients must adhere to. We ensure that all vehicle sales and customizations comply with applicable laws and procurement guidelines, providing a seamless and transparent purchasing process.
              </li>

              <li>
                <strong>Customized Fleet Solutions</strong>: We recognize the unique requirements of different sectors and provide specialized upfitting services accordingly. For entities in logistics, we can install robust cargo management systems that optimize space and enhance load handling. For those in construction and utility sectors, we equip vehicles with tool racks, utility boxes, and exterior modifications to boost durability and functionality on rugged job sites.
              </li>

              <li>
                <strong>Safety and Compliance Upgrades</strong>: We provide customized solutions that cater specifically to the needs of government and institutional clients. Whether you need vehicles for transportation, security, or specialized services, we can equip them with the necessary modifications to meet your operational requirements. Our customization process includes everything from enhanced security features to specific communication tools and technology integrations.
              </li>

              <li>
                <strong>Experienced in Large-Scale Contracts</strong>: Our extensive experience in handling large-scale contracts and orders allows us to efficiently manage substantial fleets for governmental and institutional clients. We ensure every detail is handled with the utmost precision, from initial consultation through to delivery and after-sales support.
              </li>

              <li>
                <strong>Dedicated Account Management</strong>: To ensure consistent service and communication, we assign dedicated account managers to our government and institutional clients. These specialists are knowledgeable about the nuances of public sector needs and are available to assist with any inquiries, ensuring that your experience with us is smooth and satisfactory.
              </li>

              <li>
                <strong>Training and Support</strong>: Understanding the importance of vehicle functionality, we offer comprehensive training and support for staff to ensure they are fully equipped to utilize the vehicles effectively. This includes training on vehicle operation, maintenance, and safety procedures.
              </li>

            </ul>

            <p>
              Partner with [Your Company Name] for your government and institutional vehicle needs and benefit from our dedicated approach to serving public sector entities. Our commitment to compliance, competitive pricing, and tailored solutions makes us an ideal partner for meeting the specialized needs of your organization.            </p>
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