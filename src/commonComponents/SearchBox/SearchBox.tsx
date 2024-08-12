import React from "react";
import styles from "./SearchBox.module.scss";
import { search } from "../../assets";

type Props = {};

const SearchBox = (props: Props) => {
  const onSearch = ($event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="What are you looking for?"
        onChange={($event) => onSearch($event)}
      />
      <img src={search} alt="" className={styles["search-button"]} />
    </div>
  );
};

export default SearchBox;
