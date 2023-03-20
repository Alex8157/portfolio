import { WorkExamples } from "./WorkExamples";
import styles from "../styles/Portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioHeader}>
        <h2>Примеры моих работ:</h2>
      </div>
      <WorkExamples></WorkExamples>
    </div>
  );
};
