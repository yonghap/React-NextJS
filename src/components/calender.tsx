// Calendar.js
import React, { useState } from 'react';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({ eventMap }) => {
	const today = new Date();
	const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	const firstDay = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const prevMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const nextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1));
	};

	const dates = [];
	for (let i = 0; i < firstDay; i++) {
		dates.push({
			date: '',
			text: ''
		});
	}
	for (let d = 1; d <= daysInMonth; d++) {
		dates.push({
			date: d,
			text: year + '-' + (month + 1).toString().padStart(2, "0") + '-' + d.toString().padStart(2, "0")
		});
	}
	// const dayEvents = eventMap.get('2025-05-01') || [];
	// console.log('eventMap', eventMap);

	return (
		<div>
			<h2>{year} - {month + 1}</h2>
			<button onClick={prevMonth}>◀</button>
			<button onClick={nextMonth}>▶</button>
			<div className="grid grid-cols-[repeat(7,1fr)] mt-4">
				{DAYS.map(day => (
					<div key={day} className="text-center">{day}</div>
				))}
				{dates.map((date, idx) => {
					const dayEvents = eventMap.get(date.text) || []
					const maxVisible = 3;
					const visibleEvents = dayEvents.slice(0, maxVisible);
					const extraCount = dayEvents.length - maxVisible;
					return (
						<div key={idx} className="border -ml-px -mb-px pb-4 text-slate-50">
							<div className="flex items-start">
								<strong className="absolute w-[30px] shrink-0 text-slate-50 text-center">
									{date['date']}
								</strong>
								<div>
									{visibleEvents.map((event) => (
										<div key={event.id} className="mb-3 text-xs">
											<figure>
												<img src={event.background_image} />
											</figure>
											{event.name}
										</div>
									))}
									{extraCount > 0 && (
										<div className="event-more">+ {extraCount}개 더보기</div>
									)}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};

export default Calendar;