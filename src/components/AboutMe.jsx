import styles from "../styles/AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.center}>
        <h2>- Алексей Пайхаев -</h2>
        <p>Web Developer / Frontend</p>
        <div className={styles.contacs}>
          <a href="https://github.com/Alex8157">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
          <a href="https://t.me/Lyosha_horoshiy">
            <img
              src="https://cdn-icons-png.flaticon.com/256/6422/6422206.png"
              alt="tg"
            />
          </a>
          <a href="https://hh.ru/resume/d47c4886ff0b7591d10039ed1f765a75333258">
            <div className={styles.hhLink}>hh</div>
          </a>
          <a href="mailto:alex.4618157@gmail.com">
            <img
              src="https://w7.pngwing.com/pngs/173/390/png-transparent-youtube-computer-icons-logo-email-icon-angle-photography-email-icon.png"
              alt="mail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
