import React from "react";
import NoteType from "./types/NoteType";

export default function NoteItem({
  note,
  deleteHandler,
}: {
  note: NoteType;
  deleteHandler: Function;
}) {
  const clickHandler = () => {
    deleteHandler(note.id);
  };

  return (
    <li className="item list__item">
      <button className="btn__close btn" onClick={clickHandler}>
        X
      </button>
      <div className="item__content">{note.content}</div>
    </li>
  );
}
