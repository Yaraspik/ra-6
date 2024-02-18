import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import watchType from "./types/watchType";

const Clock = ({
  watch,
  onDelete,
  time,
}: {
  watch: watchType;
  onDelete: Function;
  time: moment.Moment;
}) => {
  const [strTime, setTime] = useState("");

  useEffect(
    () => setTime(time.add(watch.timezone, "h").format("HH:mm:ss")),
    [time]
  );

  useEffect(
    () => setTime(time.add(watch.timezone, "h").format("HH:mm:ss")),
    []
  );

  return (
    <>
      <div className="card">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => onDelete(watch.title)}
        ></button>
        <div className="card-body">
          <h5 className="card-title">{watch.title}</h5>
          <p className="card-text">{strTime}</p>
        </div>
      </div>
    </>
  );
};

export default Clock;
