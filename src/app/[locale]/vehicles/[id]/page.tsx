"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function VehiclesPage({ params: { id } }) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`https://smedbackend.fly.dev/vehicles/${id}`);
    const brand = await res.json();
    setData(brand);
    console.log("data", brand);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function mapData(brand) {
    return (
      <div key={brand.ID}>

        <h3>{brand.Name}</h3>
        <div>
          {brand.Models.map((model) => (

            <Link href={`/vehicles/model/${model.ID}`} key={model.ID}>
              <div>
                <h4>{model.Name}</h4>
                <div>
                  {model.Trims.map((trim) => (
                    <div key={trim.ID}>
                      <h5>{trim.Name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <>{mapData(data)}</>;
}
