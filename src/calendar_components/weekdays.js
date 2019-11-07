import React from 'react';
import moment from 'moment';
import './weekdays.css';

class WeekDays extends React.Component {
  render () {
    return (
      <div className = 'calendar-weekdays'>
        { moment.weekdaysShort().map((day) => <div key = {day} className = 'calendar-weekdays-day'>{day[0]}</div>) }
      </div>
    );
  }
}

export default WeekDays;
