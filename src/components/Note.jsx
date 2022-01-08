import React from "react";
import { DeleteFilled } from "@ant-design/icons";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteFilled style={{ fontSize: "28px" }} />
      </button>
    </div>
  );
}

export default Note;
