import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const getvehicles = async () => {
    const data = await fetch("https://blooming-anchorage-31706-0fa311717c9a.herokuapp.com/vehicles");
    const vehicles = await data.json();

    return vehicles;
};

export default async function vehicles() {
    const vehicles = await getvehicles();
    console.log(vehicles);

    return (
        <div className={inter.className}>
            <h1>vehicles</h1>
            <ul>
                {vehicles.map((post) => (
                    <li key={post.ID}>{post.Name}</li>
                ))}
            </ul>
        </div>
    );
}
