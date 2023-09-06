import { Example } from "./UI/Example/Example";
import { data } from "../data/projectsData";
import styles from "../styles/Portfolio.module.css";

export const Portfolio = () => {

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioHeader}>
        <h2>Примеры моих работ:</h2>
      </div>
      <div className={styles.workExamples}>
        {data.map((example, index) => 
          <Example
            key={index}
            data={example}
          />
        )}
      </div>
    </div>
  );
};
