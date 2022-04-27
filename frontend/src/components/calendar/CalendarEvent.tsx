import React from "react";
import { Event } from '../../helpers/interfaces'
interface Props {
  event: Event;
}

export const CalendarEvent = ({ event }: Props) => {
  //console.log(event);
  const { title, user, end } = event;
  return (
    <div>
      <strong>{title}</strong> <br />
      <span>{user.name}</span>
      {/* <span>- {end}</span> */}
    </div>
  );
};