import React, { useState, useEffect } from "react";
import "./style.css";

const Notes = ({ notesData = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstNotePosition, setFirstNotePosition] = useState(130);
  const [allNotesVisible, setAllNotesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 300) {
        const newTop = Math.max(20, 70 - scrollPosition / 10);
        setFirstNotePosition(newTop);
      }

      const newIndex = Math.min(
        Math.floor((scrollPosition - 300) / 300),
        notesData.length - 1
      );

      setActiveIndex(newIndex);
      setAllNotesVisible(newIndex === notesData.length - 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [notesData]);

  return (
    <div
      className="notes-container"
      style={{
        height: allNotesVisible ? "240vh" : "450vh", // Increase height when all notes are visible
      }}
    >
      {notesData.map((note, index) => {
        const isActive = index === activeIndex;
        const isPrevious = index < activeIndex;

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
                ? `translate(-50%, -60%) scale(${0.95 + index * 0.03})`
                : `translate(-50%, 180%) scale(1)`,
              zIndex: isActive ? 3 : isPrevious ? 1 : -1,
              opacity: isPrevious ? 0.9 : 1,
              position: allNotesVisible ? "absolute" : "fixed", // Switch to absolute when all notes are displayed
            }}
          >
            <div className="notes-heading">{notesData[index].heading}</div>
            <div className="notes-description">
              {notesData[index].description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
