import React from "react";

export default function Typing({ from, time }) {
  return (
    <li class="clearfix">
      <div class="message-data align-right">
        <span class="message-data-time">{time}</span> &nbsp; &nbsp;
        <span class="message-data-name">{from.name}</span>
        <i class="fa fa-circle me"></i>
      </div>
      <div class="float-right">...Печатает</div>
    </li>
  );
}
