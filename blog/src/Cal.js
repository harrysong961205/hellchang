import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const routines = [
  {
    name: '5x5',
    days: [
      { day: 'Monday', exercises: ['Chest', 'Legs'] },
      { day: 'Wednesday', exercises: ['Back', 'Legs'] },
      { day: 'Friday', exercises: ['Deadlift', 'Legs'] },
    ],
  },
  // 다른 운동 루틴들...
];

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const currentMonth = moment(startDate).format('MMMM YYYY');
  const daysInMonth = moment(startDate).daysInMonth();
  const firstDayOfMonth = moment(startDate).startOf('month').format('d');

  const renderDays = () => {
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(<td key={i} className="calendar-day empty">{''}</td>);
    }

    const days = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const day = moment(startDate).date(d);
      const routine = routines.find(r => r.days.some(d => d.day === day.format('dddd')));
      days.push(
        <td key={d} className="calendar-day" onClick={() => handleDayClick(day, routine)}>
          {day.format('D')}
        </td>)};
    const totalSlots = [...blanks, ...days];
    const rows = [];
    let cells = [];
    
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    
    return (
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row}
          </tr>
        ))}
      </tbody>
    );
    };

    const handleDayClick = (day, routine) => {
    console.log('Clicked on ${day.format('YYYY-MM-DD')}');
    if (routine) {
    console.log("Routine for ${day.format('dddd')}: ${routine.name}");
    console.log("Exercises for ${day.format('dddd')}: ${routine.days.find(d => d.day === day.format('dddd')).exercises}");
    }
    };

    return (
    <div>
    <div className="calendar-header">
    <div className="calendar-title">{currentMonth}</div>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="MMMM yyyy" showMonthYearPicker />
    </div>
    <table className="calendar">
    <thead>
    <tr>
    <th className="calendar-header-day">Sun</th>
    <th className="calendar-header-day">Mon</th>
    <th className="calendar-header-day">Tue</th>
    <th className="calendar-header-day">Wed</th>
    <th className="calendar-header-day">Thu</th>
    <th className="calendar-header-day">Fri</th>
    <th className="calendar-header-day">Sat</th>
    </tr>
    </thead>
    {renderDays()}
    </table>
    </div>
    );
    }

    export default Calendar;