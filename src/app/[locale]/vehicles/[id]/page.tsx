import Image from 'next/image';



async function getData({ id }) {
  const res = await fetch(`https://smedbackend.fly.dev/vehicles/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }


  return res.json();
}


export default async function VehiclesPage({ params: { id } }) {
  const data = getData(id)
  console.log(id)
  return (
    <>

      hi</>
  );
}


