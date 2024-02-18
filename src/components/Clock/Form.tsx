import React from "react";
import watchType from "../types/watchType";

const Form = ({ addWatch }: { addWatch: Function }) => {
  const [form, setForm] = React.useState<watchType>({
    title: "",
    timezone: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.title || !form.timezone) return;

    addWatch(form);
    setForm({
      title: "",
      timezone: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Название
          </label>
          <input
            className="form-control"
            name="title"
            onChange={handleChange}
            value={form.title}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="Временная зона" className="form-label">
            Временная зона
          </label>
          <input
            className="form-control"
            name="timezone"
            onChange={handleChange}
            value={form.timezone}
            type="number"
            max={30}
            min={-30}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>
    </>
  );
};

export default Form;
