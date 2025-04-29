// 공통함수
export const formatPrice = (price:number) => {
	if (!price) {
		return 0
	}
	const newPirce = Number(String(price).slice(0, -2))
	return newPirce.toLocaleString('ko-KR')
}