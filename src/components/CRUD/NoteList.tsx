import React from "react";
import NoteItem from "./NoteItem";
import NoteType from "./types/NoteType";

export default function NoteList({ notes, deleteHandler }) {
  return (
    <ul className="lists__box">
      {notes.map((note: NoteType, i: number) => (
        <NoteItem key={i} note={note} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
}
