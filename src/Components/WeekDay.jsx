import React from 'react'

export default function WeekDay(props) {
    const dayList = [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
      ];
      const day = new Date();
    return (
        <>
            {dayList[day.getDay()]}
        </>
    )
}
