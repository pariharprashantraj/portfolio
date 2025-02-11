import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const fullText = "Prashant Raj Parihar";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [showBorder, setShowBorder] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  const [shakeInterval, setShakeInterval] = useState(null);

  useEffect(() => {
    let typingSpeed = 100;
    let deletingSpeed = 50;

    const typeEffect = () => {
      if (isTyping) {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          setIndex((prev) => prev + 1);
          setShowBorder(true);
        } else {
          setShowBorder(false);
          setTimeout(() => setIsTyping(false), 30000);
        }
      } else {
        if (index > 0) {
          setDisplayText(fullText.substring(0, index - 1));
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

  // Function to start shaking effect
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
      <header className="nav">
        <div className="pagePadding">
          <div className="container">
            <div className="navInner flex jcsb portfolioHeader">
              <div
                className={`name ${!showBorder ? "no-border" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {displayText}
              </div>

              <div className="flex iconContainer">
                <div className={isShaking ? "shaking" : ""}>
                  <a
                    href="https://www.linkedin.com/in/prashant-raj-parihar-872188103/"
                    target="blank"
                    className="no-decoration"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color="#0077B5"
                      style={{ fontSize: "24px" }}
                      className="pointer"
                    />
                  </a>
                </div>
                <div className="flex pointer ">
                  <a
                    href="/resume.pdf"
                    download="PrashantRajParihar_SeniorFrontendDeveloper_5YearsExperience_Resume.pdf"
                    className="no-decoration"
                  >
                    <div className="flex">
                      <div className={`${isShaking ? "shaking" : ""}`}>
                        <FontAwesomeIcon
                          icon={faDownload}
                          color="#ccc"
                          style={{ fontSize: "18px", paddingRight: "4px" }}
                        />{" "}
                      </div>
                      Resume
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
