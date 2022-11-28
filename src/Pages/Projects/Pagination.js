import React from "react";
import styles from "./Projects.module.css";
import { useState } from "react";

export default function Pagination({ data }) {
  const [startIndex, setStartIndex] = useState(0);

  function paginateData() {
    let paginatedData = data.slice(startIndex);
    // console.log(paginatedData);
    return paginatedData;
  }

  // console.log(startIndex);
  //   console.log(data.slice(2));
  return (
    <div>
      <div className={styles.paginationButtons}>
        <span
          onClick={() => setStartIndex((prevIndex) => prevIndex - 1)}
          className={`${startIndex === 0 ? styles.disable : ""}`}
        >
          {"<"}
        </span>
        <span
          onClick={() => setStartIndex((prevIndex) => prevIndex + 1)}
          className={`${startIndex === 4 ? styles.disable : ""}`}
        >
          {">"}
        </span>
      </div>
      <ul>
        {paginateData().map((project, index) => {
          return (
            <li key={index} className={`${index === 0 ? styles.first : ""}`}>
              <div>{index + 1}</div>
              <div className={styles.projectTitle}>{project.title}</div>
              <p>{project.description}</p>
              <div className={styles.liveLinks}>
                <a href={project.githubLink}>Link to github</a>
                <a href={project.liveLink}>Link to live site</a>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.colorDots}>
        {data.map((_, index) => {
          return (
            <span 
               className={`${styles.dot} ${index === startIndex ? styles.showColor : ""}`}
               key={index}
               >
            </span>
          );
        })}
      </div>
    </div>
  );
}
