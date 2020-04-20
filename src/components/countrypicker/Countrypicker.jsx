import React, { useState, useEffect } from "react";
import { fetchcountries } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";
import { styles } from "./Countrypicker.module.css";

const Countrypicker = ({ handleCountryChange }) => {
  const [Countrypicker, setCountryPicker] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountryPicker(await fetchcountries());
    };
    fetchAPI();
  }, [setCountryPicker]);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global"> Global</option>
        {Countrypicker.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countrypicker;
