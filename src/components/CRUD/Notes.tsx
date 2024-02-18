import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import TitleBox from "./TitleBox";
import NoteList from "./NoteList";
import NoteType from "./types/NoteType";

export default function Notes({ url }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await fetch(url);
    const notes = await res.json();
    setNotes(notes);
  };

  const add = async (note: NoteType) => {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    getNotes();
  };

  const deleteHandler = async (id: number) => {
    await fetch(url + "/" + id, { method: "DELETE" });
    getNotes();
  };

  return (
    <>
      <div className="app-notes">
        <TitleBox getNotes={getNotes} />
        <NoteList notes={notes} deleteHandler={deleteHandler} />
        <Form Add={add} />
      </div>
    </>
  );
}
