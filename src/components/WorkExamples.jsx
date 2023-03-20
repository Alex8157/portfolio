import { Example } from "./UI/Example/Example";
import { data } from "../data/projectsData";
import styles from "../styles/WorkExamples.module.css";

export const WorkExamples = (props) => {
  return (
    <div className={styles.workExamples}>
      {data.map((example, index) => (
        <Example
          key={example.name + index}
          name={example.name}
          img={process.env.PUBLIC_URL + example.img}
          description={example.description}
          stack={example.stack}
          deploy={example.deploy}
          source={example.source}
        ></Example>
      ))}
    </div>
  );
};
