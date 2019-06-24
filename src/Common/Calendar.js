import React, { Component } from "react";
import Calendar from "react-calendar";

export default class CalendarCard extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.setState({ date });
  render() {
    return (
      <React.Fragment>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </React.Fragment>
    );
  }
}
