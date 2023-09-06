import { AboutMe } from "./AboutMe";
import { Portfolio } from "./Portfolio";
import styles from "../styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
