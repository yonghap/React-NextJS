/* 현재 날씨 */
'use client';

import { useQuery } from '@tanstack/react-query';
import { formatPrice } from '@/utils/common';

async function fetchData() {
	const result = await fetch('/api/topSellers');
	if (!result.ok) throw new Error('인기 게임 목록 요청 실패');
	const data = await result.json();
	return data || [];
}

export default function MainInfo() {
	const { data, error, isLoading } = useQuery({
		queryKey : ['user'],
		queryFn : () => fetchData(),
	});
	if (isLoading) return <p>로딩 중...</p>;
	if (error) return <p>에러 발생: {(error as Error).message}</p>;
	console.log(data.new_releases.items);
  return (
		<div className="max-w-[1000px] m-auto">
			<div className="flex gap-5">
				{/* 인기 게임 */}
				<div className="basis-[calc((100%-20px)/2)]">
					<h2 className="mb-4 text-slate-200 font-bold text-xl">특별 항목</h2>
					<ul>
						{data.specials.items.map((i) => {
							return(
								<li className="mt-2 bg-[rgba(0,0,0,0.2)]">
									<div className="flex items-center gap-3">
										<div className="basis-[28%]">
											<img src={i.header_image}></img>
										</div>
										<div className="text-xs text-slate-50">
											{i.name}
										</div>
										<div className="flex flex-1 text-right">
											<div>

											</div>
											<div className="flex-1 pr-4">
												<div className={`${i.discounted ? 'text-xs text-gray-400' : 'text-slate-50'}`}>
													\{formatPrice(i.original_price)}
												</div>
												<div className="font-bold text-lime-300">
													\{formatPrice(i.final_price)}
												</div>
											</div>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
				{/* 신규 게임 */}
				<div className="basis-[calc((100%-20px)/2)]">
					<h2 className="mb-4 text-slate-200 font-bold text-xl">인기게임</h2>
					<ul>
						{data.top_sellers.items.map((i) => {
							return(
								<li className="mt-2 bg-[rgba(0,0,0,0.2)]">
									<div className="flex">
										<div className="basis-[28%]">
											<img src={i.header_image}></img>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>

		</div>
	);
}