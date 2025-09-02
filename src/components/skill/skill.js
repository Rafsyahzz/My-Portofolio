import React, { useEffect, useRef, useState } from "react";
import "./skill.scss";

const Skill = ({ skills }) => {
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // optional: stop observing after visible
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={skillRef}
      className={`skills skill animated-section ${isVisible ? "fade-in" : ""}`}
      id="skill"
    >
      <h2 className="skills__title title">My Skill</h2>
      <ul className="skills__list">
        {Array.isArray(skills) && skills.length > 0 ? (
          skills.map((skill, index) => (
            <li key={index} className="skills__item scrol_anime">
              <h3 className="skills__name">
                {skill.name}{" "}
                <span className="skills__level">({skill.level})</span>
              </h3>
              <p className="skills__desc">{skill.description}</p>
            </li>
          ))
        ) : (
          <li className="skills__item">No skills available.</li>
        )}
      </ul>
    </section>
  );
};

Skill.defaultProps = {
  skills: [],
};

export default Skill;
