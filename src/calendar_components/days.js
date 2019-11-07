import React from 'react';
import moment from 'moment';
import './days.css';

class Days extends React.Component {

  Today = moment('2017-06-13');

  showMonthDays () {

    const { date, events, updateAppDate } = this.props;
    const days = [];
    const firstDay = date.clone().startOf('month');
    const quantityDays = date.daysInMonth();

    for (let i = 0; i < firstDay.format('d'); i++) {
      days.push(<div key = {`null-${i}`} className = 'calendar-days-day'>{null}</div>);
    }

    for (let i = 0; i < quantityDays; i++) {

      const thisDay = firstDay.clone();
      const dayWithEvents = events.find((day) => moment(day.date, 'YYYY-MM-DD', true).isSame(thisDay));
      const currentDay = (thisDay.isSame(date, 'day') ? 'calendar-days-current' : 'calendar-days-day');
      const weekend = ((thisDay.weekday() === 0 || thisDay.weekday() === 6) ? ' calendar-days-weekend' : '');
      days.push(
        <div key = {thisDay.format('YYYY-MMMM-DD')} className = {currentDay + weekend} onClick = {() => updateAppDate(thisDay)}>
          {
            this.Today.isSame(thisDay, 'day')
            ?
            <div className = 'calendar-days-point'>
              <svg width='8' height='8'>
                <circle r="4" cx="4" cy="4" fill="red"/>
              </svg>
            </div>
            :
            null
          }

          <div>
            { thisDay.format('D') }
          </div>

          {
            dayWithEvents
            ?
            <div className = 'calendar-days-events'>
              { this.createLine(dayWithEvents.events.length) }
            </div>
            :
            null
          }

        </div>
      );
      firstDay.add(1, 'day');
    }
    return days;
  }

  showWeekDays () {
    const { events, date, updateAppDate } = this.props;
    const days = [];
    const firstDay = date.clone().startOf('week');

    for (let i = 0; i < 7; i++) {
      const thisDay = firstDay.clone();
      const dayWithEvents = events.find((day) => moment(day.date, 'YYYY-MM-DD', true).isSame(thisDay));
      const currentDay = (thisDay.isSame(date, 'day') ? 'calendar-days-current' : 'calendar-days-day');
      const weekend = ((thisDay.weekday() === 0 || thisDay.weekday() === 6) ? ' calendar-days-weekend' : '');
      days.push(
        <div key = {thisDay.format('YYYY-MMMM-DD')} className = {currentDay + weekend} onClick = {() => updateAppDate(thisDay)}>
          {
            this.Today.isSame(thisDay, 'day')
            ?
            <div className = 'calendar-days-point'>
              <svg width='5' height='5'>
                <circle r="2.5" cx="2.5" cy="2.5" fill="red"/>
              </svg>
            </div>
            :
            null
          }

          <div>
            { thisDay.format('D') }
          </div>

          {
            dayWithEvents
            ?
            <div className = 'calendar-days-events'>
              { this.createLine(dayWithEvents.events.length) }
            </div>
            :
            null
          }

        </div>
      );
      firstDay.add(1, 'day');
    }
    return days;
  }

  createLine (count) {
    if(count === 1) {
      return (
        <svg width='24pt' height='3pt'>
            <rect x='0' y='0' width='24pt' height='3pt'
              fill="#48C1C2" rx='2pt'/>
        </svg>
      );
    } else if (count === 2) {
        return (
          <svg width='24pt' height='3pt'>
              <rect x='0' y='0' width='11pt' height='3pt' fill="#48C1C2" rx='2pt'/>
              <rect x='17' y='0' width='11pt' height='3pt' fill="#48C1C2" rx='2pt'/>
          </svg>
        );
    } else if (count >= 3) {
      return (
        <svg width='24pt' height='3pt'>
            <rect x='0' y='0' width='7pt' height='3pt' fill="#48C1C2" rx='2pt'/>
            <rect x='11' y='0' width='7pt' height='3pt' fill="#48C1C2" rx='2pt'/>
            <rect x='22' y='0' width='7pt' height='3pt' fill="#48C1C2" rx='2pt'/>
        </svg>
      );
    }
  }

  render () {

    const { weekView } = this.props;

    return (
      <div className = 'calendar-days'>
        { weekView ? this.showWeekDays() : this.showMonthDays() }
      </div>
    );
  }
}

export default Days;
