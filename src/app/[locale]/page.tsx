
import { useLocale, useTranslations } from 'next-intl';
import Hero from 'components/hero';
import Image from 'next/image';
import Link from 'next/link';
import LocaleSwitcher from 'components/LocaleSwitcher';

async function getData() {
  const res = await fetch('https://smedbackend.fly.dev/vehicles');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.log(data);
  return data;

}

export default async function IndexPage() {
  // const t = useTranslations('IndexPage');
  const data = await getData();
  console.log(data);

  // add booking for free mot

  return (
    <section className=''>

      <Hero />
      {data.map((brand) => (
        <div key={brand.ID} className='mx-auto text-center'>
          <div className=''>
            <Link href={`/vehicles/${brand.ID}`}>
              <div className='h-40 align-middle flex items-center justify-center p-8'>
                <Image className=' ' src={`/${brand.Image}`} alt={brand.Name} width={180} height={180} />
              </div>
            </Link>
          </div>
          <div>

            {brand.Models.map((model) => (
              <Link href={`/vehicles/model/${model.ID}`} key={model.ID}>
                <div key={model.ID} className='border-b border-gray-200 pb-4'>
                  <div className='h-40 align-middle flex items-center justify-center'>
                    <Image src={`/${model.Image}`} alt={model.Name} width={180} height={180} />
                  </div>
                  <div className='pb-4'>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <LocaleSwitcher />


    </ section>
  );
}
