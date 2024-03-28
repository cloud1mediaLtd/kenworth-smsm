import Image from 'next/image';
import { Suspense } from 'react';



async function getData(id) {

  console.log(id)
  const res = await fetch(`https://smedbackend.fly.dev/vehicles/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }


  return res.json();
}


export default async function VehiclesPage({ params: { id } }) {
  const data = await getData(id)
  console.log(data)
  return (
    <Suspense fallback={<>loadiong...</>}>
      <div>
        <Image src={`/${data.Image}`} alt={data.Name} width={180} height={180} />
        <h1>{data.Name}</h1>
        <p>{data.Description}</p>
      </div>
      {data.Models.map((model) => (
        <div key={model.ID}>
          <Image src={`/${model.Image}`} alt={model.Name} width={180} height={180} />
          <h1>{model.Name}</h1>
          <p>{model.Description}</p>
          <div>
            <h2>Trims</h2>
            {model.Trims.map((trim) => (
              <div key={trim.ID}>

                <h1>{trim.Name}</h1>
                <p>{trim.Description}</p>
                <p>{trim.Price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

    </Suspense>
  );
}


