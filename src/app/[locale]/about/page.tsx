'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import Hero from 'app/[locale]/index/hero';

export default function aboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <>

      <PageLayout title={t('title')}>
        <div className="pb-8">
          {t.rich('description', {
            p: (chunks) => <p className="mt-4 text-lg">{chunks}</p>,

          })}
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h1>Welcome</h1>
            <p>
              A brief welcome message that introduces the dealership and sets a friendly tone.
            </p>
          </div>

          <div>
            <h1>History and Background</h1>
            <p>
              Information about the dealership's founding, key milestones, and how it has evolved over the years. This section could include details about the dealership’s growth, notable achievements, or its impact on the local community.
            </p>
          </div>

          <div>
            <h1>Mission and Vision Statements</h1>
            <p>
              A section that outlines the dealership's mission and vision, helping customers understand the core values and long-term goals of the business.
            </p>
          </div>

          <div>
            <h1>Community Involvement</h1>
            <p>
              Information about the dealership's involvement in the local community, including sponsorships, charitable activities, or partnerships with local organizations. This section could highlight the dealership's commitment to giving back and supporting the community.
            </p>
          </div>

          <div>
            <h1>Products and Services</h1>
            <p>
              Detailed descriptions of the products (new vehicles from Dodge, Chrysler, Jeep, Ram, Fiat, Peugeot) and services (maintenance, repairs, spare parts) offered. This could also include any special offers or programs, such as warranties or loyalty programs.            </p>
          </div>

          <div>
            <h1>Customer Testimonials</h1>
            <p>
              A selection of customer testimonials or reviews that showcase the dealership's commitment to customer satisfaction. This section could include quotes from satisfied customers, star ratings, or links to external review sites.
            </p>
          </div>

          <div>
            <h1>Community Involvement</h1>
            <p>
              Information on how the dealership contributes to the local community, including charity events, sponsorships, or environmental initiatives.
            </p>
          </div>

          <div>
            <h1>Gallery or Virtual Tour</h1>
            <p>
              A visual gallery or virtual tour of the dealership, showcasing the facility, staff at work, and the range of vehicles available.

            </p>
          </div>

          <div>
            <h1>News and Events</h1>
            <p>
              Updates on the latest news, events, or promotions happening at the dealership. This section could include announcements about new vehicle launches, special sales events, or community activities.
            </p>
          </div>

          <div>
            <h1>Certifications and Awards</h1>
            <p>
              Any industry certifications or awards the dealership has received that highlight its excellence and reliability.            </p>
          </div>
          <div>
            <h1>Meet the Team</h1>
            <p>
              An introduction to the dealership's team members, highlighting key staff and their roles within the organization. This section could include photos, bios, and contact information for each team member.
            </p>
          </div>

          <div>
            <h1>Contact Us</h1>
            <p>
              Contact information for the dealership, including phone numbers, email addresses, and physical addresses. This section could also include a contact form or links to social media profiles.
            </p>

          </div>

        </div>

      </PageLayout>

    </>
  );
}
