import styles from "./RedirectButton.module.css";
import Link from "next/link";

interface Props {
  text: string;
  textColor?: string;
  bgColor?: string;
}

export default function RedirectButton({ text, textColor, bgColor }: Props) {
  return (
    <Link href="/register" className={styles.link}>
      <p
        className={styles.text}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </p>
    </Link>
  );
}
