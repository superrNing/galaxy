import Link from "next/link";
import Head from "next/head";
import styles from "./detail.module.css";
import { useRouter } from "next/router";
import detailData from "@/pageData/detailPageData";
import Image from "next/image";

const DetailPage = () => {
  const router = useRouter();
  let { query } = router;
  let curDetail = query.name;
  console.log("detailData", detailData, "router", router, curDetail);

  return detailData[curDetail] ? (
    <div className={styles.detailContainer}>
      <Head>
        <title>{query.name || "Sun"}</title>
      </Head>
      <main className={styles.detailMain}>
        <h2 className={styles.articleTitle}>{detailData[curDetail].title}</h2>
        <article className={styles.article} id="article-container">
          <Image
            className={`${
              styles[detailData[curDetail].className] || styles.imgLeft
            } ${styles.articleImg}`}
            {...detailData[curDetail].img}
          />
          {detailData[curDetail].desc}
        </article>
      </main>
    </div>
  ) : (
    ""
  );
};

export default DetailPage;
