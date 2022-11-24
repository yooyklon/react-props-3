import React from "react";

export default function Message({ from, time, text }) {
  return (
    <li class="clearfix">
      <div class="message-data align-right">
        <span class="message-data-time">{time}</span> &nbsp; &nbsp;
        <span class="message-data-name">{from.name}</span>
        <i class="fa fa-circle me"></i>
      </div>
      <div class="message other-message float-right">{text}</div>
    </li>
  );
}
