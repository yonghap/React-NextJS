/* 현재 날씨 */
'use client';

import { useQuery } from '@tanstack/react-query';

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
	if (isLoading) return <p>로딩 중...</p>;
	if (error) return <p>에러 발생: {(error as Error).message}</p>;
  return (
    <ul class="max-w-[1000px] m-auto flex flex-wrap gap-3">
	    {data.map((i) => {
				return(
		      <li class="shadow-lg radius-lg basis-[calc((100%-20px*4)/5)]">
			      <img src={i.header_image}></img>
		      </li>
				)
			})}
    </ul>
  );
}