import React from 'react';
import moment from 'moment';
import './tasks.css';

class Tasks extends React.Component {

  showTasks () {
    const { date, weekView, events } = this.props;
    const eventsInDay = [];
    const tempDate = date.clone();
    const firstEvent = date.clone();
    const lastDay = ( weekView ? tempDate.endOf('week').format('YYYY-MM-DD') : tempDate.endOf('month').format('YYYY-MM-DD'));
    while(1) {
      const currentTasks = events.find((day) => moment(day.date, 'YYYY-MM-DD', true).isSame(firstEvent));
      if (currentTasks) {
        eventsInDay.push(currentTasks.events.map((task, i) =>
          <div key = {task.name + i + task.body + task.time }>
            {
              date.format('YYYY-MM-DD') === firstEvent.format('YYYY-MM-DD')
              ?
                this.showCurrentDate(firstEvent, i)
              :
                this.showOtherDate(firstEvent, i)
            }
            {
              date.format('YYYY-MM-DD') === firstEvent.format('YYYY-MM-DD')
              ?
                this.showCurrentTasks(task, i)
              :
                this.showOtherTasks(task, i)
            }
          </div>
          )
        );
      }
      if (firstEvent.format('YYYY-MM-DD') !== lastDay)
        firstEvent.add(1, 'day');
      else
        break;
    }
    return eventsInDay;
  }

  showCurrentDate (firstEvent, i) {
    if(i === 0){
      return (
        <div className = 'calendar-tasks-currentDate'>
          { firstEvent.format('dddd, D MMMM').toUpperCase() }
        </div>
      );
    } else {
      return null;
    }
  }

  showOtherDate (firstEvent, i) {
    if(i === 0) {
      return (
        <div className = 'calendar-tasks-OtherDate'>
          { firstEvent.format('ddd, D MMMM').toUpperCase() }
        </div>
      );
    } else {
      return null;
    }
  }

  showCurrentTasks (task, i) {
    return (
      <div key = {i + task.name} className = 'calendar-tasks-currentTasks-image'>
      <div className = 'calendar-tasks-currentTasks'>

        <div className = 'calendar-tasks-currentTasks-body'>
          {task.body}
        </div>
        <div className = 'calendar-tasks-currentTasks-name'>
          {task.name}
        </div>
        <div className = 'calendar-tasks-currentTasks-time'>
          {task.time}
        </div>

        <div className = 'calendar-tasks-currentTasks-panel'>
          <div className = 'calendar-tasks-currentTasks-panel-firstArrow'>
            <svg width='30' height='18'>
              <polyline points="7.5,9 15,15 26,1" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
            </svg>
          </div>
          <div className = 'calendar-tasks-currentDate-panel-text'>
            {"I AM IN"}
          </div>
          <div className = 'calendar-tasks-currentDate-panel-secondArrow'>
            <svg width='20' height='10'>
              <polyline points="1,1 9,8 16,1" fill="none" stroke="#E6EAEE" strokeWidth="2.5" rx="10" ry="10"/>
            </svg>
          </div>
        </div>

      </div>
      </div>
    );
  }

  showOtherTasks(task, i) {
    return (
      <div key = {task.name + i} className = 'calendar-tasks-otherTasks'>

        <div className = 'calendar-tasks-otherTasks-head'>

          <div className = 'calendar-tasks-otherTasks-head-name'>
            {task.name}
          </div>

          <div className = 'calendar-tasks-otherTasks-head-time'>
            {task.time}
          </div>

        </div>

        <div className = 'calendar-tasks-otherTasks-body'>
          {task.body}
        </div>

      </div>
    );
  }

  render () {
    return (
      <div className = 'calendar-tasks'>
        { this.showTasks() }
      </div>
    );
  }
}

export default Tasks;
