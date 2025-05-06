// Calendar.js
import React, { useState } from 'react';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
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
		dates.push(null);
	}
	for (let d = 1; d <= daysInMonth; d++) {
		dates.push(d);
	}

	return (
		<div className="text-slate-100 text-center">
			<h2>{year} - {month + 1}</h2>
			<button onClick={prevMonth}>◀</button>
			<button onClick={nextMonth}>▶</button>
			<div className="grid grid-cols-[repeat(7,1fr)] mt-4">
				{DAYS.map(day => (
					<div key={day} style={{ fontWeight: 'bold' }}>{day}</div>
				))}
				{dates.map((date, idx) => (
					<div key={idx} style={{ padding: '8px', border: '1px solid #ddd', minHeight: '40px' }}>
						{date}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;