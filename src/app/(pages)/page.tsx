import styles from "./page.module.css";
import RedirectButton from "@/components/RedirectButton/RedirectButton";
import DescriptionModule from "@/components/DescriptionModule/DescriptionModule";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1>The Ultimate Schedule Builder</h1>
        <h2>
          Take away the stress of course selection day with our{" "}
          <span className="highlight-blue">simple</span>{" "}
          <span className="highlight-green">responsive</span>{" "}
          <span className="highlight-red">drag-and-drop</span> interface.
        </h2>
      </div>

      <RedirectButton text="Get Started" url="/get-started" />

      <div className={styles["module-container"]}>
        <DescriptionModule
          title="Easy to Use"
          desc="A modern and simplified interface that shows you only the information
          you need to know and want to know."
          src="/abc-blocks.svg"
          invert="1"
        />

        <DescriptionModule
          title="Blazing Fast"
          desc="Built from the ground-up using React, allowing for instant responsiveness without constant server requests."
          src="/lightning.svg"
          invert="1"
        />

        <DescriptionModule
          title="Customizable"
          desc="Powered by Schedule-X, allowing for insant drag-and-drop anytime you want to change your schedule."
          src="/cube.svg"
          invert="1"
        />

        <DescriptionModule
          title="The Details"
          desc="Get information on any of your classes at quick glance. No extra menus, complexity, or over-engineering."
          src="/grid.svg"
          invert="1"
        />

        <DescriptionModule
          title="Complete Package"
          desc="This is more than a schedule builder. Get access to your grades, GPA, and other school information with ease."
          src="/package.svg"
          invert="1"
        />
      </div>

      <p className={styles["powered-by"]}>Developed by Kabir Bose</p>
    </div>
  );
}
