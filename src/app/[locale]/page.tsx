
import { useLocale, useTranslations } from 'next-intl';
import Hero from 'components/hero';


export default async function IndexPage() {

  const locale = useLocale();
  // add booking for free mot

  return (
    <section className=''>

      <Hero />
      <div className='content-container-no-bg mt-8'>

        <h1>Latest Offers</h1>
      </div>
      <div className='content-container-no-bg mt-8'>

        <h1>Visit our showroom</h1>
      </div>

    </ section>
  );
}
