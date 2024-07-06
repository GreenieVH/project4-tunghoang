import {  useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   fetch();
  // }, [searchValue]);

  return (
    <div className="input-group rounded toolbox-left">
      <input
        type="search"
        className="form-control"
        style={{ color: "black", borderRight: "none" }}
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="search-addon"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <span
        className="input-group-text border-0"
        id="search-addon"
        style={{
          display: "flex",
          height: "30px",
          alignItems: "center",
          justifyContent: "center",
          width: "30px",
          backgroundColor: "#CC9966",
          color: "white",
        }}
      >
        <i className="icon-search" />
      </span>
    </div>
  );
}

export default Search;
