import HeaderLink from "./headerLink";
import styles from "./header.module.css";
import SearchBar from "@/components/searchBar/searchBar";
import { useEffect, useState } from "react";

const headerLinkDataLeft = [
  {
    text: "EMAIL",
    herf: "mailto:TORONTOKYO715@gmail.com",
    className: "green",
  },
  {
    text: "SHOP",
    herf: "#",
    className: "yellow",
  },
  {
    text: "NEWS",
    herf: "#",
    className: "blue",
    last: true,
  },
];

const Header = () => {
  const [userAppearance, setUserAppearance] = useState();
  useEffect(() => {
    const localAppearance = localStorage.getItem("userAppearance");
    if (localAppearance) {
      setUserAppearance(localAppearance);
    }
  }, []);
  useEffect(() => {
    // console.log("cur appearance:", userAppearance);
    userAppearance === "light"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    localStorage.setItem("userAppearance", userAppearance);
  }, [userAppearance]);
  return (
    <>
      <header className={styles.headerWrapper} id="header-container">
        <nav className={styles.nav}>
          {headerLinkDataLeft.map((i) => (
            <HeaderLink {...i} key={i.text} />
          ))}
        </nav>
        <h1 className={styles.title}>G A L A X Y</h1>
        <nav className={styles.navAppearance}>
          {userAppearance === "light" ? (
            <i
              className="ri-sun-line"
              onClick={() => setUserAppearance("dark")}
            ></i>
          ) : (
            <i
              className="ri-moon-line"
              onClick={() => setUserAppearance("light")}
            ></i>
          )}
        </nav>
      </header>
      <SearchBar />
    </>
  );
};

export default Header;
