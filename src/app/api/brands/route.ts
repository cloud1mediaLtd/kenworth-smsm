//src/app/api/brands/route.ts

export async function GET(request) {
	const res = await fetch("https://smedbackend.fly.dev/vehicles", {
		next: { revalidate: 30000 },
	});

	const brands = await res.json();
	return Response.json(brands);
}
