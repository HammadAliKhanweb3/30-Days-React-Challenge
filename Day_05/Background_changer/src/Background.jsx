import { useState } from "react";

function Background() {
  let [color, setColor] = useState("white");

  function changeColor(getColor) {
    setColor(getColor);
  }
  return (
    <>
      <div
        className=" relative h-screen w-screen flex  items-center justify-center   "
        style={{ backgroundColor: color }}
      >
        <div
          className="flex flex-row items-center justify-center absolute top-10 h-28 m w-1/3 rounded-xl "
          style={{ backgroundColor: "#080404" }}
        >
          <h1>Background Changer</h1>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-3 absolute bottom-10 h-24  rounded-full "
          style={{ backgroundColor: "#ffa502" }}
        >
          <button
            className="ml-5"
            style={{ backgroundColor: "#32ff7e" }}
            onClick={() => {
              changeColor("#32ff7e");
            }}
          >
            Wint Green
          </button>
          <button
            style={{ backgroundColor: "#0652DD" }}
            onClick={() => {
              changeColor("#0652DD");
            }}
          >
            Marine Blue
          </button>
          <button
            style={{ backgroundColor: "#2f3542" }}
            onClick={() => {
              changeColor("#2f3542");
            }}
          >
            Prestige
          </button>
          <button
            className=" text-black"
            style={{ backgroundColor: "#f1f2f6" }}
            onClick={() => {
              changeColor("#f1f2f6");
            }}
          >
            White
          </button>
          <button
            style={{ backgroundColor: "#34495e" }}
            onClick={() => {
              changeColor("#34495e");
            }}
          >
            Wet Asphalt
          </button>
          <button
            style={{ backgroundColor: "#e74c3c" }}
            onClick={() => {
              changeColor("#e74c3c");
            }}
          >
            AliZarin
          </button>
          <button
            style={{ backgroundColor: "#4cd137" }}
            onClick={() => {
              changeColor("#4cd137");
            }}
          >
            Green
          </button>
          <button
            className="mr-5"
            style={{ backgroundColor: "#8e44ad" }}
            onClick={() => {
              changeColor("#8e44ad");
            }}
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
}
export default Background;
