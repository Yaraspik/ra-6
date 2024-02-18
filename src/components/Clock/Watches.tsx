import React from "react";
import { useState, useEffect } from "react";
import Clock from "./Clock";
import Form from "./Form";
import watchType from "./types/watchType";
import moment from "moment-timezone";

const Watches = () => {
  const [watches, setWatches] = useState<Array<watchType>>([]);
  const [time, setTimer] = useState(moment.tz("GMT"));

  const addWatch = (watch: watchType) => {
    setWatches([...watches, watch]);
  };

  const deleteClock = (title: string) => {
    setWatches(watches.filter((i) => i.title !== title));
  };

  useEffect(() => {
    const interval = setInterval(() => setTimer(moment.tz("GMT")), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="app-watches">
        <Form addWatch={addWatch} />
        <div className="watch-list">
          {watches.map((watch, index) => (
            <Clock
              key={index}
              watch={watch}
              time={moment.tz("GMT")}
              onDelete={deleteClock}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Watches;
