import styles from "./RedirectButton.module.css";
import Link from "next/link";

interface Props {
  text: string;
  url: string;
  textColor?: string;
  bgColor?: string;
}

export default function RedirectButton({
  text,
  textColor,
  bgColor,
  url,
}: Props) {
  return (
    <Link href={url} className={styles.link}>
      <p
        className={styles.text}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </p>
    </Link>
  );
}
