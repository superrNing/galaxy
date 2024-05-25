import styles from "./searchBar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
const searchBarCenterLink = [
  {
    name: "Twitter",
    link: "/",
    key: "Twitter",
  },
  {
    name: "Facebook",
    link: "/",
    key: "Facebook",
  },
  {
    name: "Instagram",
    link: "/",
    key: "Insagram",
  },
];

const SearchBar = () => {
  const router = useRouter();
  let { route } = router;
  let { query } = router;
  let path = route === "/" ? "Home" : query.name;
  const [userQuery, setQuery] = useState("");
  // console.log("SearchBarrouterouteroute", router);
  // useEffect(() => {
  //   console.log("route", router);
  //   if (route !== "/searchTable") {
  //     const handler = () => setQuery("");
  //     router.events.on("routeChangeComplete", handler);
  //     return () => router.events.off("routeChangeComplete", handler);
  //   }
  // }, []);
  const jumpToTablePage = (e) => {
    // console.log("e", e, "userQuery", userQuery, "router", router);
    if (e && e.keyCode === 13 && userQuery.length) {
      router.push({
        pathname: "/searchTable",
        query: { searchQuery: userQuery },
      });
    } else {
      return false;
    }
  };
  return (
    <nav className={styles.searchBar} id="nain-nav">
      <span>
        You are Here:{" "}
        <span className={styles.curLink}>{path || "Search Result"}</span>
        {route === "/" ? (
          ""
        ) : (
          <span>
            &nbsp; - &nbsp;Back to{" "}
            <Link className={styles.link} href="/">
              Home
            </Link>
          </span>
        )}
      </span>
      <span className={styles.centerBox}>
        - &nbsp;
        {searchBarCenterLink.map((i) => (
          <Link className={styles.centerLink} href={i.link} key={i.name}>
            {i.name}
          </Link>
        ))}
        &nbsp; -
      </span>
      <span className={styles.searcherBox}>
        <input
          placeholder="Search"
          type="text"
          value={userQuery}
          onKeyDown={(e) => jumpToTablePage(e)}
          onChange={(event) => setQuery(event.target.value)}
        />
        <i
          className="ri-search-line"
          onClick={() => jumpToTablePage({ keyCode: 13 })}
        ></i>
      </span>
    </nav>
  );
};

export default SearchBar;
