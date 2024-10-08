import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Search from "./Search/Search";

const Countries = () => {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(API_URL);
        const res = await data.json();
        setCountries(res);
        setFilteredCountries(res);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((elem) =>
        elem.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <Search search={handleSearch} />
      <div className="app-container">
        {filteredCountries.map((elem, index) => (
          <Card key={index} value={elem} />
        ))}
      </div>
    </>
  );
};

export default Countries;
