import axios from "axios";
import styles from "./searchTable.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import { useEffect, useState } from "react";

const SearchTable = () => {
  const router = useRouter();
  const dateFormatter = "MMMM Do YYYY, h:mm:ss a";
  let { query } = router;
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = useState(true);
  // console.log("router", router);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query.searchQuery}`
      );
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [query.searchQuery]);

  return (
    <>
      <div className={styles.searchTableContainer}>
        <table className={styles.searchTable} cellSpacing="0" cellPadding="0">
          <thead className={styles.searchTableHead}>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Created At</th>
              <th>Last Update</th>
            </tr>
          </thead>
          {loading ? (
            <tbody className={styles.searchTablebody}>
              <tr>
                <td colSpan={4} className={styles.tableNoData}>
                  loading...
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className={styles.searchTablebody}>
              {data.hits.length ? (
                data.hits.map((item) => (
                  <tr key={item.objectID} className={styles.searchTablebodyTr}>
                    <td>
                      <a target="_blank" href={item.url || item.story_url}>
                        {item.title || item.story_title}
                      </a>
                    </td>
                    <td>{item.author}</td>
                    <td>{moment(item.created_at).format(dateFormatter)}</td>
                    <td>{moment(item.updated_at).format(dateFormatter)}</td>
                  </tr>
                ))
              ) : (
                <tr className={styles.searchTablebodyTr}>
                  <td colSpan={4} className={styles.tableNoData}>
                    No Data...
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default SearchTable;
