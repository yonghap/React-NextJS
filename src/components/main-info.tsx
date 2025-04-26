/* 현재 날씨 */
'use client';

import { useQuery } from '@tanstack/react-query';
import * as code from "@/constants/code";
import { getShortestRangeDate } from "@/utils/date";
import { setCurrentWeather } from "@/utils/weather";


async function fetchData() {
	const result = await fetch('/api/topSellers');
	if (!result.ok) throw new Error('인기 게임 목록 요청 실패');
	const data = await result.json();
	return data.top_sellers?.items || [];
}

export default function MainInfo() {
	const { data, error, isLoading } = useQuery({
		queryKey : ['user'],
		queryFn : () => fetchData(),
	});
	// if (isLoading) return <p>로딩 중...</p>;
	// if (error) return <p>에러 발생: {(error as Error).message}</p>;
  return (
    <p className="bg-blue-500 text-white p-4">
	    {JSON.stringify(data)}
    </p>
  );
}