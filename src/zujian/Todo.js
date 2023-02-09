import React, { useState } from "react";
import Mod from "./Mod";
import BackDrop from "./BackDrop";

function Todo(props) {
  const [a, b] = useState(false);
  return (
    <div className="father">
      <div>To do {props.text}</div>
      <button
        onClick={() => {
          a ? b(false) : b(true);
        }}
      >
        btn1
      </button>
      {a ? <Mod text={props.text}/> : null}
      <BackDrop />
    </div>
  );
}

export default Todo;
