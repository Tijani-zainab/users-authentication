import styles from "./Projects.module.css";
import projectsData from "./projectsData";
import { useState } from "react";
import Pagination from "./Pagination";

const Projects = () => {
    /*
    I would probably have to implement pagination 
    on this project section.
    */
   const [data, setData] = useState(projectsData)
   return (
    <div className={styles.Projects}>
      <h2>Our Projects</h2>
      <p className={styles.projectPara}>
        Here are a few projects we have worked on both individually and
        collaboratively.
      </p>
     
         <Pagination data={data}
         />
    </div>
  );
};

export default Projects;
