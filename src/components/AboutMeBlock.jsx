import styles from "../styles/AboutMeBlock.module.css";

export const AboutMeBlock = () => {
  return (
    <div className={styles.aboutMeBlock}>
      <div className={styles.centerBlock}>
        <h3>Здравствуйте!</h3>
        <p>Меня зовут Алексей и я React разработчик.</p>
        <p>
          Ниже на этой страничке вы можете ознакомиться <br />с примерами моих
          работ.
        </p>
        <p className={styles.findMeBlock}>
          Я на:
          <a href="https://github.com/Alex8157">GitHub</a>
          <a href="https://hh.ru/applicant/resumes/view?resume=d47c4886ff0b7591d10039ed1f765a75333258">
            hh.ru
          </a>
        </p>
        <p>
          Телефон:
          <br />
          <span
            onClick={() => {
              navigator.clipboard.writeText("8-913-461-81-57");
            }}
          >
            8-913-461-81-57
          </span>
        </p>
        <p>
          E-mail:
          <br />
          <span
            onClick={() => {
              navigator.clipboard.writeText("alex.4618157@gmail.com");
            }}
          >
            alex.4618157@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};
