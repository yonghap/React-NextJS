import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const apiKey = process.env.RAWG_API_KEY;
		const query = new URLSearchParams({ key: apiKey, page: 1, page_size: 100, ordering: '-added', language: 'ko' });
		// const res = await fetch('https://store.steampowered.com/api/featuredcategories?l=korean');
		const res = await fetch(`https://api.rawg.io/api/games?dates=2025-05-01,2025-12-25&${query}`);
		if (!res.ok) throw new Error('API 요청 실패');
		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: '데이터를 가져오는 데 실패했습니다.' }, { status: 500 });
	}
}