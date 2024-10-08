import React from "react";
import style from "./Search.module.css";

const Search = ({ search }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    search(value);
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        onChange={handleChange}
        className={style.input}
        placeholder="Search for countries..."
      />
    </div>
  );
};

export default Search;
