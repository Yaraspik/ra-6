import React, { FormEvent } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Form({ Add }) {
  const [content, setContent] = useState("");

  const handleChange = ({ target: { value } }) => {
    setContent(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (content === "") return;
    const note = { id: uuid(), content };
    Add(note);
    setContent("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">New notes</h3>
        <textarea
          className="form__textarea"
          onChange={handleChange}
          value={content}
          name="text"
        />
        <button className="btn-add btn">&gt;</button>
      </form>
    </>
  );
}
