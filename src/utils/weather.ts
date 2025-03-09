// 오늘 날짜 구하기
import * as code from "@/constants/code";

export const setCurrentWeather = (data : Array<object>) : object => {
	const t1h = data.find(i => i.category === 'T1H');
	const sky = data.find(i => i.category === 'SKY');
	const pty = data.find(i => i.category === 'PTY');

	if (pty.fcstValue === '0') {
		return {
			'T1H' : t1h.fcstValue,
			'SKY' : sky.fcstValue
		}
	} else {
		return {
			'T1H' : t1h.fcstValue,
			'SKY' : pty.fcstValue
		}
	}
}