import React, { useEffect, useState } from "react";
import "./Nav.css";

export const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" alt="Netflix Logo" src="./netflix.png" />
      <img
        className="nav__avatar"
        alt="Netflix Profile"
        src="./smileyface.png"
      />
    </div>
  );
};
