import React from "react";
import styles from "./Projects.module.css";
import { useState } from "react";

export default function Pagination({ data }) {
  const [startIndex, setStartIndex] = useState(0);

  function paginateData() {
    let paginatedData = data.slice(startIndex);
    return paginatedData;
  }
  
//   console.log(data);
//   console.log(data.slice(2));
  return (
    <div>
      <div className={styles.paginationButtons}>
        <span onClick={() => setStartIndex((prevIndex) => prevIndex - 1)} > - </span>
        <span onClick={() => setStartIndex((prevIndex) => prevIndex + 1)}> + </span>
      </div>
      <ul>
        {paginateData().map((project, index) => {
          return (
            <li key={index} className={`${index === 0? styles.first : ''}`}>
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
    </div>
  );
}
