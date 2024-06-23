import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import "../styles/Getstarted.css"
const GetStarted = () => {
  return (
    <section className="getstarted">
      <div>
        <button>
          <span>Get Started</span>
          <span ><IoMdArrowRoundForward/></span>
        </button>
      </div>
    </section>
  );
};

export { GetStarted };
