import * as React from 'react';
import moment from 'moment';

import Calendar from './calendar_components/calendar';


class App extends React.Component {

  state = {
    date: moment('2017-06-20'),
    events: [
      {
        date: '2017-06-05',
        events: [
          { name: 'PRACTICE', body: 'Sope Creek', time: '10:00 AM' }
        ]
      },
      {
        date: '2017-06-07',
        events: [
          { name: 'PRACTICE', body: 'Pine Mountain Overlook Loop', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-09',
        events: [
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' },
        ]
      },
      {
        date: '2017-06-10',
        events: [
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' },
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' },
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-12',
        events: [
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-14',
        events: [
          { name: 'PRACTICE', body: 'Blanket\'s Creek', time: '10:00 AM' }
        ]
      },
      {
        date: '2017-06-16',
        events: [
          { name: 'PRACTICE', body: 'Blanket\'s Creek', time: '10:00 AM' }
        ]
      },
      {
        date: '2017-06-20',
        events: [
          { name: 'PRACTICE', body: 'Blanket\'s Creek Trail', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-22',
        events: [
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-24',
        events: [
          { name: 'PRACTICE', body: 'Blanket\'s Creek', time: '10:00 AM' },
          { name: 'PRACTICE', body: 'Sope Creek', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-26',
        events: [
          { name: 'PRACTICE', body: 'Pine Mountain Overlook Loop', time: '11:00 AM' }
        ]
      },
      {
        date: '2017-06-28',
        events: [
          { name: 'PRACTICE', body: 'Sope Creek', time: '02:00 PM' }
        ]
      },
      {
        date: '2017-06-30',
        events: [
          { name: 'RACE', body: 'All-A-Toona Ride', time: '11:00 AM' }
        ]
      }
    ]
  };

  updateAppDate = (value) => {

    this.setState({ date: value });

  };

  render() {

    const { date, events} = this.state;
    return(
      <Calendar date = {date} events = {events} updateAppDate = {this.updateAppDate} />
    );
  }

}

export default App;
