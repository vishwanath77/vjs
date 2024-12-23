import React from "react";

const countries = ["UK", "Canada", "Germany", "Australia", "Australia Partner", "Saskatchewan", "Quebec"];

const CountryPreference = ({ onSelect, selected }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {countries.map((country) => (
        <button
          key={country}
          onClick={() => onSelect(country)}
          style={{
            padding: "10px 20px",
            border: selected === country ? "2px solid black" : "1px solid #ddd",
            background: selected === country ? "black" : "white",
            color: selected === country ? "white" : "black",
            cursor: "pointer",
          }}
        >
          {country}
        </button>
      ))}
    </div>
  );
};

export default CountryPreference;
