import { NextResponse } from 'next/server';

// 날짜 받아오기
const getMonth = () => {
	const today = new Date();
	const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

	function formatDate(date) {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 1 더하고 두 자리로!
		const day = date.getDate().toString().padStart(2, '0');         // 일도 두 자리로!

		return `${year}-${month}-${day}`;
	}

	const formattedFirstDay = formatDate(firstDayOfMonth);
	const formattedLastDay = formatDate(lastDayOfMonth);

	return formattedFirstDay + ',' + formattedLastDay;
}

export async function GET(request) {
	try {
		const apiKey = process.env.RAWG_API_KEY;
		const { searchParams } = new URL(request.url);

		const query = new URLSearchParams({
			key: apiKey,
			page: 1,
			page_size: 100,
			ordering: '-added',
			language: 'ko',
			dates: searchParams.get('dates')
		});
		const res = await fetch(`https://api.rawg.io/api/games?${query}`);
		if (!res.ok) throw new Error('API 요청 실패');
		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: '데이터를 가져오는 데 실패했습니다.' }, { status: 500 });
	}
}