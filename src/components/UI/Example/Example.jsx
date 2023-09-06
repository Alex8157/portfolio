import { useState } from "react";
import styles from "./Example.module.css";

export const Example = ({ data }) => {
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
          backgroundImage: `url(${data.img})`,
          backgroundPosition: position,
        }}
      >
        <img src={data.img} alt={data.name} />
      </figure>
      <div className={styles.text}>
        <div className={styles.parth}>
          <h3>{data.name}</h3>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className={styles.parth}>
          <h4>Стек технологий:</h4>
          <p>{data.stack}</p>
          <div className={styles.buttons}>
            <a href={data.deploy}>Посмотреть</a>
            <a href={data.source}>Исходный код</a>
          </div>
        </div>
      </div>
    </div>
  );
};
