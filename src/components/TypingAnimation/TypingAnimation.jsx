import React, { useState, useEffect } from "react";
import skills from "../../data/skills";
import styles from "./TypingAnimation.module.css";
const shuffledSkills = skills.sort((a, b) => 0.5 - Math.random());

function TypingAnimation() {
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const typeSkill = (skill) => {
      const speed = 100; // Typing speed in milliseconds
      let charIndex = 0; // Current character (starts at beginning of the string)

      const typeInterval = setInterval(() => {
        if (charIndex < skill.length) {
          setCurrentSkill(skill.substring(0, charIndex + 1)); // set currentSkill a substring starting at index 0 ending at charIndex + 1
          charIndex++; // grow string
        } else {
          clearInterval(typeInterval);
          setTimeout(eraseSkill, 3500); // Wait for 3.5 second before erasing
        }
      }, speed);
    };
    const eraseSkill = () => {
      const skill = shuffledSkills[currentIndex].skill;
      const speed = 50; // Erasing speed in milliseconds

      let charIndex = skill.length; // Current character (starts at the end of the string)

      const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
          setCurrentSkill(skill.substring(0, charIndex - 1)); // set currentSkill to a substring starting at index 0 ending at charIndex - 1
          charIndex--; // shrink string
        } else {
          clearInterval(eraseInterval);
          setTimeout(
            () => setCurrentIndex((currentIndex + 1) % skills.length),
            500
          ); // Wait for 0.5 seconds before typing the next skill
        }
      }, speed);
    };
    const typeTimeout = setTimeout(
      () => typeSkill(shuffledSkills[currentIndex].skill),
      2500
    );
    return () => {
      clearTimeout(typeTimeout);
    };
  }, [currentIndex]);

  return (
    <div className={styles.animationContainer}>
      <p className={styles.animation}>
        Specializing in{" "}
        <span className={styles.currentSkill}>{currentSkill}</span>
      </p>
    </div>
  );
}

export default TypingAnimation;
