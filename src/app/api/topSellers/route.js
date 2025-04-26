import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const res = await fetch('https://store.steampowered.com/api/featuredcategories?l=korean');
		if (!res.ok) throw new Error('API 요청 실패');
		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: '데이터를 가져오는 데 실패했습니다.' }, { status: 500 });
	}
}