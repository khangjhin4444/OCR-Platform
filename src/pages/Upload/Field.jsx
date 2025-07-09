import { useState } from "react";
import tickImg from "../../assets/tick.svg";

export default function Field({ field, data, check, onToggle }) {
  return (
    <>
      <p className="field">{field}</p>
      <p className="data">{data}</p>
      <div className="tick">
        <img
          className={`tick-img ${check ? "tick-active" : ""}`}
          src={tickImg}
          alt=""
          onClick={onToggle}
        />
      </div>
    </>
  );
}
