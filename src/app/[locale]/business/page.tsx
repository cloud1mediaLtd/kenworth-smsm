
import PageLayout from 'components/PageLayout';
import { Separator } from 'components/ui/separator';
import { getTranslations } from 'next-intl/server';

export default async function aboutPage() {
  const t = await getTranslations('BusinessCenterPage');

  return (
    <>

      <PageLayout title={t('title')}>
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-3">
            {t.rich('description', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
            })}
          </div>

          <Separator className="my-0" />

          <div className="flex flex-col gap-3">
            {t.rich('management.desc', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('management.maintenance', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('management.customized', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <Separator className="my-0" />

          <div className="flex flex-col gap-3">
            {t.rich('institutional.desc', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('institutional.compliance', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('institutional.customized', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('institutional.safety', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('institutional.scale', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('institutional.account', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
          </div>

          <div className="flex flex-col gap-3">
            {t.rich('institutional.training', {
              h1: (chunks) => <h1 className="">{chunks}</h1>,
              p: (chunks) => <p className="">{chunks}</p>,
              ul: (chunks) => <ul className="">{chunks}</ul>,
              li: (chunks) => <ul className="">{chunks}</ul>,
              strong: (chunks) => <strong className="">{chunks}</strong>,
            })}
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