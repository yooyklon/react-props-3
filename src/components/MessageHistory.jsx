import React from "react";

import Message from "./Message";

import Response from "./Response";

import Typing from "./Typing";

export default function MessageHistory({ list }) {
  if (!list) return null;

  return (
    <ul>
      {list.map(
        (obj) =>
          (obj.type === "message" && <Message {...obj} />) ||
          (obj.type === "response" && <Response {...obj} />) ||
          (obj.type === "typing" && <Typing {...obj} />)
      )}
    </ul>
  );
}

MessageHistory.defaultProps = {
  list: [],
};
