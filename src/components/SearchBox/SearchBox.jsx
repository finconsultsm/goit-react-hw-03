import sc from "./SearchBox.module.css";

const SearchBox = ({ query, handleSearch }) => {
  return (
    <label className={sc.label}>
      Find contacts by name
      <input
        className={sc.input}
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="John"
      />
    </label>
  );
};

export default SearchBox;
