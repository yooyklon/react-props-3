import React from "react";

export default function Response({ from, time, text }) {
  return (
    <li>
      <div class="message-data">
        <span class="message-data-name">
          <i class="fa fa-circle online"></i>
          {from.name}
        </span>
        <span class="message-data-time">{time}</span>
      </div>
      <div class="message my-message">{text}</div>
    </li>
  );
}
