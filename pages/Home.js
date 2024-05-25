import ContentGrids from "@/components/contentGrids/contentGrids";
import Link from "next/link";
import styles from "@/styles/home.module.css";
import { isProd } from ".";

export default function Home({ allprops }) {
  console.log("Home allprops", allprops);
  return (
    <>
      <section className={styles.detailContainer}>
        <div className={styles.detailImgWrapper}>
          <img
            className={styles.detailImg}
            src={isProd ? "./galaxy2.jpg" : "/galaxy2.jpg"}
            // width={800}
            // height={300}
            alt="galaxy"
          />
        </div>
        <aside className={styles.carouselContainer}>
          <h2 className={styles.carouselTitle}>Explore the galaxy</h2>
          <article>
            A galaxy is a system of <Link href="./detail/Star">stars</Link>,{" "}
            <Link href="./detail/CompactStar">stellar remnants</Link>,{" "}
            <Link href="./detail/InterstellarMedium">interstellar gas</Link>,{" "}
            <Link href="./detail/CosmicDust">dust</Link>, and dark matter bound
            together by gravity. The word is derived from the Greek galaxias
            (γαλαξίας), literally 'milky', a reference to the Milky Way galaxy
            that contains the Solar System. Galaxies, averaging an estimated 100
            million stars, range in size from dwarfs with less than a hundred
            million stars, to the largest galaxies known – supergiants with one
            hundred trillion stars, each orbiting its galaxy's center of mass.
            Most of the mass in a typical galaxy is in the form of dark matter,
            with only a few percent of that mass visible in the form of stars
            and nebulae. Supermassive black holes are a common feature at the
            centres of galaxies.
          </article>
        </aside>
      </section>
      <ContentGrids />
    </>
  );
}
