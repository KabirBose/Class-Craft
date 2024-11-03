import styles from "./DescriptionModule.module.css";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  invert?: string;
  src: string;
}

export default function DescriptionModule({ title, desc, invert, src }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <Image
        src={src}
        alt={title}
        height="100"
        width="100"
        style={{ filter: `invert(${invert})` }}
        className="image"
      />
    </div>
  );
}
