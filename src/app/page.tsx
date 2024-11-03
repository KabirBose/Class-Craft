import styles from "./page.module.css";
import RedirectButton from "../components/RedirectButton/RedirectButton";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>The Ultimate Schedule Builder</h1>
      <h2>
        Take away the stress of course selection day with our{" "}
        <span className="highlight-blue">simple</span>{" "}
        <span className="highlight-green">responsive</span>{" "}
        <span className="highlight-red">drag-and-drop</span> interface.
      </h2>

      <div>
        <RedirectButton text="Get Started" />
      </div>

      <p className={styles["powered-by"]}>Powered by: Schedule-X & React</p>
    </div>
  );
}
