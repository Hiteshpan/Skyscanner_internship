import React, { Component } from "react";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";
import BpkInput, {
  INPUT_TYPES,
} from "@skyscanner/backpack-web/bpk-component-input";
import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";
import STYLES from "./App.scss";
// import format from "date-fns/format";
import { format } from 'date-fns';

const getClassName = cssModules(STYLES);

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");

const daysOfWeek = [
  { name: "Sunday", nameAbbr: "Sun", index: 0, isWeekend: true },
  { name: "Monday", nameAbbr: "Mon", index: 1, isWeekend: false },
  { name: "Tuesday", nameAbbr: "Tue", index: 2, isWeekend: false },
  { name: "Wednesday", nameAbbr: "Wed", index: 3, isWeekend: false },
  { name: "Thursday", nameAbbr: "Thu", index: 4, isWeekend: false },
  { name: "Friday", nameAbbr: "Fri", index: 5, isWeekend: false },
  { name: "Saturday", nameAbbr: "Sat", index: 6, isWeekend: true },
];

class Calender extends Component {
  constructor() {
    super();
    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: this.state.selectionConfiguration.type,
        date: date,
      },
    });
  };

  render() {
    return (
      <div>
        <BpkInput
          style={{ width: "98%", margin: "2px" }}
          id="dateInput"
          type={INPUT_TYPES.text}
          name="date"
          value={(this.state.selectionConfiguration.date || "").toString()}
          placeholder="Departure date"
        />
        <BpkCalendar
          id="calendar"
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
        />
      </div>
    );
  }
}

const App = () => (
  <div className={getClassName("App")}>
    <header className={getClassName("App__header")}>
      <div className={getClassName("App__header-inner")}>
        <BpkText
          tagName="h1"
          textStyle="xxl"
          className={getClassName("App__heading")}
        >
          Flight Schedule
        </BpkText>
      </div>
    </header>
    <Calender />
    <main className={getClassName("App__main")}>
      <BpkButton className="BpkButton" onClick={() => alert('Your "Flight Schedule" set successfully!!!')}>Continue</BpkButton>
    </main>
  </div>
);

export default App;
