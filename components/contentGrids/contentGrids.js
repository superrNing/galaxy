import styles from "./contentGrid.module.css";
import Grid from "./grid";
import contentData from "@/pageData/ homeGridData";

const ContentGrids = () => {
  return (
    <section className={styles.gridsContainer} id="section-container">
      {contentData.map((i) => (
        <Grid key={i.title} {...i} />
      ))}
    </section>
  );
};

export default ContentGrids;
