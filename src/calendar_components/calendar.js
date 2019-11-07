import React from 'react';
import './calendar.css';

import Header from './header';
import WeekDays from './weekdays';
import Days from './days';
import Tasks from './tasks';

class Calendar extends React.Component {

  state = {
    weekView: false
  }

  updateCalendarWeekView = (value) => {
    this.setState({weekView: value});
  }

  render() {
    const { date, events, updateAppDate } = this.props;
    const { weekView } = this.state;
    return (
      <div className = 'calendar'>
        <Header
          date = {date.clone()}
          updateAppDate = {updateAppDate}
          weekView = {weekView}
          updateCalendarWeekView = {this.updateCalendarWeekView}
        />
        <WeekDays />
        <Days
          date = {date.clone()}
          updateAppDate = {updateAppDate}
          weekView = {weekView}
          events = {events}
        />
        <Tasks
          date = {date.clone()}
          weekView = {weekView}
          events = {events}
        />
      </div>
    );
  }
}

export default Calendar;
