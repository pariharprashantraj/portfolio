import React, { useState, useEffect } from "react";
import "./styleD.css";

const notesData = ["Note 1", "Note 2", "Note 3", "Note 4", "Note 5"];

const Notes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstNotePosition, setFirstNotePosition] = useState(130); // Starts at 70%

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 300) {
        // Move the first note gradually up to 20%
        const newTop = Math.max(20, 70 - scrollPosition / 10);
        setFirstNotePosition(newTop);
      }

      const newIndex = Math.min(
        Math.floor((scrollPosition - 300) / 300),
        notesData.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="notes-container">
      {notesData.map((note, index) => {
        const isActive = index === activeIndex;
        const isPrevious = index < activeIndex;
        const isNext = index > activeIndex;

        return (
          <div
            key={index}
            className={`note ${
              isActive ? "hidden" : isPrevious ? "previous" : "hidden"
            }`}
            style={{
              top:
                index === 0
                  ? `${firstNotePosition}%`
                  : `${firstNotePosition + index * 2}%`,
              transform: isActive
                ? "translate(-50%, -50%) scale(1.1)"
                : isPrevious
                ? `translate(-50%, -60%) scale(${0.95 + index * 0.03})` // Moves up and shrinks
                : `translate(-50%, 180%) scale(1)`, // Hidden below
              zIndex: isActive ? 3 : isPrevious ? 1 : -1, // Active note on top
              opacity: isPrevious ? 0.9 : 1, // Older notes fade
            }}
          >
            <h2>{note}</h2>
            <p>This is a sample note with stacking effect.</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
