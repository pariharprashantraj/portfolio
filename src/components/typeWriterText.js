import React, { useState, useEffect } from "react";

const TypeWriterText = ({
  text,
  setIsShaking = () => {},
  color = "#666",
  fs = "18px",
}) => {
  const [shakeInterval, setShakeInterval] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [showBorder, setShowBorder] = useState(true);
  useEffect(() => {
    let typingSpeed = 100;
    let deletingSpeed = 50;

    const typeEffect = () => {
      if (isTyping) {
        if (index < text.length) {
          setDisplayText(text.substring(0, index + 1));
          setIndex((prev) => prev + 1);
          setShowBorder(true);
        } else {
          setShowBorder(false);
          setTimeout(() => setIsTyping(false), 30000);
        }
      } else {
        if (index > 0) {
          setDisplayText(text.substring(0, index - 1));
          setIndex((prev) => prev - 1);
          setShowBorder(true);
        } else {
          setShowBorder(false);
          setTimeout(() => setIsTyping(true), 500);
        }
      }
    };

    const interval = setTimeout(
      typeEffect,
      isTyping ? typingSpeed : deletingSpeed
    );

    return () => clearTimeout(interval);
  }, [index, isTyping]);
  const handleMouseEnter = () => {
    setIsShaking(true);
    if (!shakeInterval) {
      const interval = setInterval(() => {
        setIsShaking((prev) => !prev); // Toggle shaking class
      }, 300); // Shake every 300ms
      setShakeInterval(interval);
    }
  };

  // Function to stop shaking effect
  const handleMouseLeave = () => {
    setIsShaking(false);
    if (shakeInterval) {
      clearInterval(shakeInterval);
      setShakeInterval(null);
    }
  };
  return (
    <>
      <div
        className={`name ${!showBorder ? "no-border" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: color, fontSize: fs }}
      >
        {displayText}
      </div>
    </>
  );
};

export default TypeWriterText;
