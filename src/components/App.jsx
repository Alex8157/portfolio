import { AboutMeBlock } from "./AboutMeBlock";
import { Portfolio } from "./Portfolio";
import styles from "../styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <AboutMeBlock />
      <Portfolio />
    </div>
  );
}

export default App;
