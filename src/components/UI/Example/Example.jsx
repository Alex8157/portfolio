import { useState } from "react";
import styles from "./Example.module.css";

export const Example = (props) => {
  const [position, setPosition] = useState("0% 0%");

  const handleMouseMove = (e) => {
    const { left, height, width } = e.target.getBoundingClientRect();
    const top = e.target.offsetTop;
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
  };

  return (
    <div className={styles.example}>
      <figure
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: position,
        }}
      >
        <img src={props.img} alt={props.name} />
      </figure>
      <div className={styles.text}>
        <div className={styles.parth}>
          <h3>{props.name}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
        <div className={styles.parth}>
          <h4>Стек технологий:</h4>
          <p>{props.stack}</p>
          <div className={styles.buttons}>
            <a href={props.deploy}>Открыть деплой</a>
            <a href={props.source}>Открыть исходники</a>
          </div>
        </div>
      </div>
    </div>
  );
};
