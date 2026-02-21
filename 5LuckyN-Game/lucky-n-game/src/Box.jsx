import { useState } from "react";
import "./Box.css";

export default function Box({ isActive, toggleIsActive }) {
  return (
    <div
      onClick={toggleIsActive}
      className="Box"
      style={{ backgroundColor: isActive ? "red" : "black", cursor: "pointer" }}
    ></div>
  );
}
