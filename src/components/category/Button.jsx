import React from "react";

function Button({
  text = "Click Me",
  bgColor = "bg-primary",
  textColor = "text-white",
  handler = ()=>{}
}) {
  return (
    <button onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer px-6 py-2 rounded-full font-semibold hover:scale-105 duration-200`}
    >
      {text}
    </button>
  );
}

export default Button;