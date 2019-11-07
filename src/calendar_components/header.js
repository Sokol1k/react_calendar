import React from 'react';
import './header.css';

class Header extends React.Component {

  state = {
    panelWeekMonthView: false
  }

  updateHeaderPanelWeekMonthView = () => {
    this.setState({panelWeekMonthView: !this.state.panelWeekMonthView});
  }

  updateCalendarWeekView = (value) => {
    const { updateCalendarWeekView } = this.props;
    this.setState({panelWeekMonthView: false});
    updateCalendarWeekView(value);
  }

  changeMonthPrev = () => {
    const { date, updateAppDate, weekView } = this.props;
    if(weekView){
      updateAppDate(date.clone().subtract(7, 'days'));
    } else {
      updateAppDate(date.clone().subtract(1, 'month'));
    }

  }

  changeMonthNext = () => {
    const { date, updateAppDate, weekView } = this.props;

    if(weekView){
      updateAppDate(date.clone().add(7, 'days'));
    } else {
      updateAppDate(date.clone().add(1, 'month'));
    }
  }

  showMonthPanel () {

    const { date } = this.props;
    const { panelWeekMonthView } = this.state;

    return (
      <div className = 'calendar-header-panel'>

        <div className = 'calendar-header-panel-monthPrev' onClick = { this.changeMonthPrev }>
          { date.clone().subtract(1, 'month').format('MMM').toUpperCase() }
        </div>

        <div className = 'calendar-header-panel-monthArrow'>
          <div className = 'calendar-header-panel-monthArrow-month'>{ date.format('MMMM').toUpperCase()}</div>
          <div className = 'calendar-header-panel-monthArrow-arrow' onClick = {this.updateHeaderPanelWeekMonthView}>
            {
              panelWeekMonthView
              ?
              <svg width='20' height='10'>
                  <polyline points="1,8 8,1.6 16,8" fill="none" stroke="#E6EAEE" strokeWidth="2.5"/>
              </svg>
              :
              <svg width='20' height='10'>
                  <polyline points="1,1 8,8 16,1" fill="none" stroke="#E6EAEE" strokeWidth="2.5"/>
              </svg>
            }
          </div>
        </div>

        <div className = 'calendar-header-panel-monthNext' onClick = { this.changeMonthNext }>
          { date.clone().add(1, 'month').format('MMM').toUpperCase() }
        </div>

      </div>
    );
  }

  showWeekPanel () {
    const { date } = this.props;
    const { panelWeekMonthView } = this.state;
    const temp = date.clone();
    const showMonthAndWeekDays = temp.format(`MMMM ${temp.startOf('week').format('D')}-${temp.endOf('week').format('D')}`);

    return (
      <div className = 'calendar-header-panel'>

        <div className = 'calendar-header-panel-monthPrev' onClick = { this.changeMonthPrev }>
          { 'PREV' }
        </div>

        <div className = 'calendar-header-panel-monthArrow'>
          <div className = 'calendar-header-panel-monthArrow-month'>{ showMonthAndWeekDays }</div>
          <div className = 'calendar-header-panel-monthArrow-arrow' onClick = {this.updateHeaderPanelWeekMonthView}>
            {
              panelWeekMonthView
              ?
              <svg width='20' height='10'>
                  <polyline points="1,8 8,1.6 16,8" fill="none" stroke="#E6EAEE" strokeWidth="2.5"/>
              </svg>
              :
              <svg width='20' height='10'>
                  <polyline points="1,1 8,8 16,1" fill="none" stroke="#E6EAEE" strokeWidth="2.5"/>
              </svg>
            }
          </div>
        </div>

        <div className = 'calendar-header-panel-monthNext' onClick = { this.changeMonthNext }>
          { 'NEXT' }
        </div>

      </div>
    );
  }

  showWeekMonthPanel() {
    return (
      <div className = 'calendar-header-weekMonthPanel'>
        <div className = 'calendar-header-weekMonthPanel-thisWeek' onClick = {() => this.updateCalendarWeekView(true)}>{'This week'}</div>
        <div className = 'calendar-header-weekMonthPanel-thisMonth' onClick = {() => this.updateCalendarWeekView(false)}>{'This month'}</div>
      </div>
    );
  }

  render () {

    const { weekView } = this.props;
    const { panelWeekMonthView } = this.state;

    return(
      <div className = 'calendar-header'>

        { weekView ? this.showWeekPanel() : this.showMonthPanel() }

        { panelWeekMonthView ? this.showWeekMonthPanel() : null }

      </div>
    );
  }
}

export default Header;
